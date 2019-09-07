#include<iostream>
#include<fstream>
#include<vector>
using namespace std;
struct m {
	int start;
	int finish;
};
struct comp {
	int term;
	int index;
};
int*term;
m *met;
int v = 0;
int* visit;
int* visit1;
static int* path;
//int count;
//vector<int>path1(1000);
int**matrix;
int y = 0;
int index;
vector<vector<int>> vect(100000);
vector<vector<int>> invvect(100000);
vector<vector<int>> hack(100000);
vector<int> hacker;
int max(int count) {
	int x = 0;
	int k = 0;
	for (int i=0;i<count;i++)
		if (met[i].finish >= x && visit1[i]==0) {
			k = i;
			x = met[i].finish;
		}
	return k;
}
void dfs(int i) {
	if (visit[i] == 0) {
		visit[i] = 1;
		y++;
		met[i].start = y;
		for (int j = 0; j < vect[i].size(); j++) {
			if (visit[vect[i][j]] == 0) {
				dfs(vect[i][j]);
			}
		
		}
	        y++;
			met[i].finish = y;
	}
}
int find(int i, int k) {
	for (int j = 0; j < hack[i].size(); j++)
		if (k == hack[i][j])
			return 1;
	return 0;
}
void min(int k) {
	bool q = false;
	if (hack[k].size() != 0) {
		int x = term[hack[k][0]];
		int j = hack[k][0];
		if (hack[k].size() == 1) {
			if (invvect[hack[k][0]].size() == 0) {
				hacker.push_back(hack[k][0]);
				return;
			}
			else {
				return;
			}
		}
		/*for (int i=0;i<hacker.size();i++){
			if (hacker.size()!=0)
				for (int j=0;j< hack[k].size();)*/
		for (int i = 0; i < hack[k].size(); i++) {
			for (int j = 0; j < invvect[hack[k][i]].size(); j++)
				if (find(k, invvect[hack[k][i]][j]) == 0)
					q = true;
			if (term[hack[k][i]] < x) {
				x = term[hack[k][i]];
				j = hack[k][i];
			}

		}
			if (q == false)
				hacker.push_back(j);
			//	v++;
		
	}
}
void dfs1(int i,int b) {
	if (visit1[i] == 0) {
		visit1[i] = 1;
		hack[b].push_back(i);
		//met[i].start = y;
		for (int j = 0; j < invvect[i].size(); j++) {
			if (visit1[invvect[i][j]] == 0) {
				dfs1(invvect[i][j],b);
			}

		}
	
	}
}
/*void new_graph(int count) {
	for (int i=0;i<count;i++)
		for (int j 

}*/
int main() {
	ifstream in("input.txt");
	ofstream out("output.txt");
	int count;
	in >> count;
	term = new int[count];

	int b=0;
	int q=0;
	matrix = new int*[count];
	for (int i = 0; i < count; i++) {
		matrix[i] = new int[count];
	}
	for (int i = 0; i < count; i++)
		in >> term[i];
	while(true){
			in >> b;
			in >> q;
			if (b == 0 && q == 0) {
				break;
			}
				vect[b-1].push_back(q-1);
			    invvect[q-1].push_back(b-1);
			    
	}
	met = new m[count];
	visit1 = new int[count];
	visit = new int[count];
	path = new int[count];
	for (int i = 0; i < count; i++) {
		path[i] = 0;
		visit[i] = 0;
		visit1[i] = 0;
		met[i].start = 0;
		met[i].finish = 0;
		//path[i] = 0;
	}

	for (int i = 0; i < count; i++) {
	if (visit[i]==0)
		dfs(i);

	}
	for (int i = 0; i < count; i++)
		dfs1(max(count), max(count));
	
/*for (int i = 0; i < count; i++) {
		for (int j = 0; j < hack[i].size(); j++)
			cout << hack[i][j] << " ";
		cout << endl;
	}*/
	for (int i = 0; i < count; i++)
		min(i);

	out << hacker.size() << endl;
	for (int i = 0; i < hacker.size(); i++){
		out << hacker[i]+1 << " ";
}
/*	for (int i = 0; i < count; i++)
		cout << met[i].start << " " << met[i].finish << endl;*/
	//out << endl;
	system("pause");
}

