#include<iostream>
#include<fstream>
#include<vector>
#include<queue>
using namespace std;

struct m {
	int parent=-1;
	int visit=0;
	int in;
};
int x, y;
int start;
int finish;
m *met;
struct dot {
	int index;
	int w;
};

vector<vector<dot>> myGraph(6000);
vector<vector<int>> vect(6000);

void bfs1() {
	queue <int> bfs;
	bfs.push(start);
	while (met[finish].visit == 0 && !bfs.empty()) {
		int o = bfs.front();
		met[o].visit = 1;
		bfs.pop();
		for (int i = 0; i < myGraph[o].size(); i++)
			
			if (met[myGraph[o][i].index].visit == 0 && myGraph[o][i].w==1) {
				met[myGraph[o][i].index].visit = 1;
				met[myGraph[o][i].index].parent = o;
				met[myGraph[o][i].index].in = i;
				bfs.push(myGraph[o][i].index);
			}
	}
}
/*void find(int h,int countn) {
	for (int i=0;i<2*countn;i++)
		for (int j=0;j<myGraph[i].size;j++)
			if (myGraph[i][j].index == h) {
				int x = i;
				int y = j;
			}

}*/
int main() {

	ifstream in("input.txt");
	ofstream out("output.out");
	int countn;
	int f = 0;
	bool k2 = false;
	int countm;
	in >> countn;
	in >> countm;
	met = new m[countn * 2];
	int buf;
	for (int i = 0; i < countn; i++){
		in >> buf;
		while (buf != 0) {
			vect[i].push_back(buf - 1);
			in >> buf;
		}
	}
	in >> start;
	start--;
	in >> finish;
	finish--;
	for (int i = 0; i < countn; i++)
	{
		if (i != start && i != finish) {
			myGraph[i].push_back({ i + countn,1 });
			myGraph[i + countn].push_back({ i,0 });
			for (int j = 0; j < vect[i].size() ; j++) {
				myGraph[i + countn].push_back({ vect[i][j], 1 });
				myGraph[vect[i][j]].push_back({ i + countn,0 });
			}
		}
		else {
			for (int j = 0; j < vect[i].size(); j++) {
			if (vect[i][j] == start && vect[i][j] == finish) {
					f = 0;
					k2 = true;
				}
				else {
					myGraph[i].push_back({ vect[i][j], 1 });
					myGraph[vect[i][j]].push_back({ i,0 });
					in >> buf;

				}
		}

		}
	}
	if (k2 == true)
		f++;
	
	int k = 0;
	int k1;
	int h=finish;
	while (true) {
		bfs1();
		if (met[finish].visit != 0) {
			k = met[finish].parent;
			k1 = met[finish].in;
			while (true) {
				if (met[k].parent==-1) {
					myGraph[start][k1].w = 0;
					myGraph[h][k1].w = 1;
					break;
				}
				myGraph[k][k1].w = 0;
				 k1 = met[k].in;
				
				
				k = met[k].parent;
               
				h = k;
					myGraph[h][k1].w = 1;
			}
			f++;
			for (int i = 0; i < 2 * countn; i++) {
				met[i].visit = 0;
				met[i].in = -1;
				met[i].parent = -1;
			}



		}
		else {
			cout << f;
				break;
		}


	}
	/*for (int i = 0; i < 2 * countn; i++) {
		for (int j = 0; j < myGraph[i].size(); j++)
			cout << myGraph[i][j].index << " " << myGraph[i][j].w << "   ";
		cout << endl;
	}*/


		system("pause");
	}
