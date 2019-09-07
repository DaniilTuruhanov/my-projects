#include<iostream>
#include<fstream>
#include<vector>
#include<string>
#include<stack>
#include<queue>
using namespace std;
struct W {
	int inp;
	int outp;
	int count[26];
};
int** Words1;
W* Words2;
int* visit;

void dfs(int i) {
		visit[i] = 1;
		for (int j = 0; j <26; j++) {
			if (Words1[i][j]==1)
			if (visit[j] == 0) {
				//visit[j] == 1;
				dfs(j);
			}

	}
}
int countedinic(int i) {
	int count = 0;
	for (int j = 0; j < 26; j++)
		if (Words1[i][j] == 1)
			count++;
	return count;
}
int find(int i) {
	for (int j = 0; j < 26; j++)
		if (Words2[i].count[j] != 0)
			return j;
}
int main() {
	ifstream in("input.txt");
	ofstream out("output.txt");
	visit = new int[26];
	for (int i = 0; i < 26; i++)
		visit[i] = 0;
	int count;
	int start;
	in >> count;
	string buf;
	queue<string>** Words;
	Words1 = new int*[26];
	Words2 = new W[26];
	Words = new queue<string>*[26];
	for (int i = 0; i < 26; i++) {
		Words[i] = new queue<string>[26];
		Words1[i] = new int[26];
		//Words2[i] = new W[26];
	}
	for (int i = 0; i < 26; i++) {
		Words2[i].inp = 0;
		Words2[i].outp = 0;
		for (int j = 0; j < 26; j++) {
			Words2[i].count[j] = 0;
			Words1[i][j] = 0;
		}
	}
	for (int i = 0; i < count; i++) {
		in >> buf;
		int k = buf[0] - 'a';
		int h = buf[buf.size() - 1] - 'a';
		Words[buf[0] - 'a'][buf[buf.size() - 1] - 'a'].push(string(buf));
		//	start = buf[0] - 'a';
		//	int j = buf[buf.size() - 1] - 'a';
			Words1[buf[0] - 'a'][buf[buf.size() - 1] - 'a'] = 1;
			Words1[buf[buf.size() - 1] - 'a'][buf[0] - 'a'] = 1;
			Words2[buf[0] - 'a'].count[buf[buf.size() - 1] - 'a']++;
			Words2[buf[0] - 'a'].inp++;
			Words2[buf[buf.size() - 1] - 'a'].outp++;
	}
	
	//	for (int i = 0; i < 26; i++) {
		//for (int j = 0; j < 26; j++)

/*			for (int k = 0;k< Words[i][j].size(); k++)
				if(Words[i][j].size()!=0)
				cout << Words[i][j][k]<<" ";*/
//	}
	for (int i = 0; i < 26; i++)
		if (Words2[i].inp != 0) {
			start = i;
			break;
		}
	dfs(start);
	bool f = false;
	bool f1 = false;

	for (int i = 0; i < 26; i++)
		if(Words2[i].inp!=0 || Words2[i].outp != 0)
			if (visit[i] == 0) {
				f = true;
				break;
			}
	for (int i = 0; i < 26; i++)
		if ((Words2[i].inp != Words2[i].outp )){

				f1 = true;
				break;
			}
	vector<int> posledov;
	if (f == false && f1 == false) {
		stack<int> St;
		out << "Yes" << endl;
		St.push(start);
		while (!St.empty()) {
			int deg = St.top();
			if (Words2[deg].inp == 0) {
				posledov.push_back(deg);
				St.pop();
			}
			else {
				int f = find(deg);
				Words2[deg].count[f]--;
				Words2[deg].inp--;
				St.push(f);
			}

		}
		vector<int>posl;
		int k = 0;
		for (int i = posledov.size() - 1; i >= 0; i--) {
			posl.push_back(posledov[i]);
		}
		//	cout << posl[k] << " ";
		//	k++;
		//}
		for (int i = 0; i < posl.size() - 1; i++) {
			out << Words[posl[i]][posl[i + 1]].front() << endl;
			Words[posl[i]][posl[i + 1]].pop();
		}
	}
	else
		out << "No" << endl;



			

	system("pause");
}