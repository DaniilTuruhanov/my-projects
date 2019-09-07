#include<iostream>
#include<fstream>
#include<queue>
#include<vector>
#include<stack>
#define INF INT64_MAX
using namespace std;

struct chin {
	int parent=-1;
	int ind = -1;
	long long ves = 0;
	vector<int> vect;
};
int main() {
	ifstream in("in.txt");
	ofstream out("out.txt");
	int count;
	long long min;
	min = INF;
	in >> count;
	chin* mas;
	int x, y,z,k;
	mas = new chin[count];
	for (int i = 0; i < count; i++) {
		in >> x;
		in >> y;
mas[x - 1].ind = x - 1;
		for (int j = 0; j < y;j++) {
			in >> z;
			in >> k;
			mas[x - 1].vect.push_back(z - 1);
			mas[z - 1].ves = k;
			mas[z - 1].parent = x - 1;
		}
	}
	//mas[0].ves = 0;
	/*for (int i = 0; i < count; i++)
	{
		cout << i << endl;
		cout << mas[i].ves << " " << mas[i].parent << endl;
		for (int j = 0; j < mas[i].vect.size(); j++)
			cout << mas[i].vect[j] << " ";
		cout << endl;
	}*/
	//system("pause");
	int* met;
	int index = 0;
	met = new int[count];
	for (int i = 0; i < count; i++)
		met[i] = 0;
	queue<chin>q;
	q.push(mas[0]);
	while (!q.empty()) {
		chin l = q.front();
		q.pop();
		if(l.parent!=-1)
		mas[l.ind].ves= mas[l.ind].ves+ mas[l.parent].ves;
		l.ves = l.ves + mas[l.parent].ves;
		if (l.vect.size() == 0)
			if (l.ves < min) {
				min = l.ves;
				index = l.ind;
			}
			for (int i = 0; i < l.vect.size(); i++)
					q.push(mas[l.vect[i]]);
		}
	out << min << endl;
	stack<int> v;
	while (index != 0) {
		v.push(index+1);
		index = mas[index].parent;
	}
	v.push(1);
	while (!v.empty()) {
		out << v.top() << " ";
		v.pop();
	}
	system("pause");
	}

