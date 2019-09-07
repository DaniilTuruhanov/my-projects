#include "MyFunc.h"
#include <iostream>
#include <fstream>
#include <iomanip>
#include <math.h>
using namespace std;
void main()
{
	ofstream out;
	out.open("output.txt");
	setlocale(LC_ALL, "rus");
	double a, b;
	double s = 0, s1 = 0;
	double x;
	double k;
	double p;
	double n = 1.0;
	double m, h;
	cin >> a >> b >> m >> h;
	out << setw(6) << "" << "————————————" << "——————————————————————————" << "————————————————————————" << "" << setw(15) << endl;
	out << setw(6) << "|" << setw(6) << "X" << setw(6) << "|" << setw(18) << "Ðåçóëüòàò" << setw(8) << "|" << setw(21) << "Ñòàíäàðò. ôóíêöèè" << setw(4) << "|" << setw(15) << endl;
	out << setw(6) << "|" << "———————————" << "|" << "—————————————————————————" << "|" << "————————————————————————" << "|" << setw(15) << endl;
	for (double i = a; i <= b; i = i + h)
	{

		while (n <= m)
		{
			s = s + (i*pow(i, n)*pow(i, n)*ctg(sin(i, n), cos(i, n))) / (2.0*n + 2.0);
			s1 = s1 + (i*pow(i, n)*pow(i, n)*tg(i, n) / (2.0*n + 2.0));
			n += 1;
		}
		out << setw(6) << "|" << setw(6) << i << setw(6) << "|" << setw(18) << s << setw(8) << "|" << setw(18) << s1 << setw(7) << "|" << setw(15) << endl;
		out << setw(6) << "|" << "———————————" << "|" << "—————————————————————————" << "|" << "————————————————————————" << "|" << setw(15) << endl;
		n = 1.0;

	}




	system("pause");
}