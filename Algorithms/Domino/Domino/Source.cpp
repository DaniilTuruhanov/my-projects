#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include<fstream>
#include<queue>
using namespace std;
vector<vector<int>> vect(100000);
struct Domino {
	int x=0;
	int y=0;
};
queue<Domino>q;
int main() {
	vector<bool>met;
	int allmax = 0;
	int index = 0;
	int max = 0;
	bool flag;
	bool f = false;
	FILE*in;
	in = fopen("in.txt", "r");
	ofstream out("out.txt");
	int count;
	int k;
	fscanf_s(in, "%d", &count);
	//met = new int[count];
	for (int i = 0; i < count; i++)
		met.push_back(false);
	int x;
	for (int i = 0; i < count; i++) {
		fscanf_s(in, "%d", &k);
		for (int j = 0; j < k; j++) {
			fscanf_s(in, "%d", &x);
			vect[i].push_back(x - 1);
		}
	}
	int c = 0;
	for (int i = 0; i < count; i++) {
		Domino d;
		flag = false;
		for (int i = 0; i < count; i++)
			met[i]=0;
		c = 1;
		d.x = i;
		d.y = 0;
		max = 0;
		q.push(d);

		while (!q.empty()) {
			Domino m = q.front();
			met[m.x] = 1;
			for (int j = 0; j < vect[q.front().x].size(); j++) {
				if (met[vect[q.front().x][j]] == 0) {
					met[vect[q.front().x][j]] == 1;
					Domino z;
					c++;
					z.x = vect[q.front().x][j];
					z.y = m.y + 1;
					if (z.y > max)
						max = z.y;
					q.push(z);
				}
			}
			q.pop();
		}
		if (c == count) {
			if (max >= allmax) {
				allmax = max;
				index = i;

			}
			f = true;
		}
	}

	if (f == true) {
		out << allmax << endl;
		out << index + 1;
	}
	else
		out << "impossible";

	system("pause");
}