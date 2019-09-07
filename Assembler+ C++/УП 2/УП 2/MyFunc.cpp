#include "MyFunc.h"
#include <iostream>
#include <fstream>
#include <iomanip>
using namespace std;

double tg(double x, double n)
{
	double ctg;
	double e;
	double PI = 3.1415926535897932;
	_asm

	{
		fld x
		fld n
		fmul
		fstp x
		fld x
		fptan
		fdivr
		fstp ctg

	}

	return ctg;
}
double sum(double x, double m)
{
	double ctg;
	double l;
	double q, w, e, r, t;
	double sum = 0.0;
	double dva = 2.0;
	double  i = 1.0;
	double j = 1.0;
	double y = 1.0;
	_asm
	{
		fld y
		fstp i

		start :
		fld m
			fld x
			fstp l
			fld j
			fstp y
			fcom i
			fstsw ax
			sahf
			jb end1
			if1 :
		fstp m
			fld i
			fld dva
			fmul
			fld1
			fadd
			fst w
			cmp1 :
		fcom y
			fstsw ax
			sahf
			jbe cont
			fld l
			fld x
			fst t
			fmul
			fst t
			fstp l
			fst t
			fld1
			fld y
			fadd
			fstp y
			jmp cmp1
			cont :
		fst e
			fst r
			fld l
			fst r
			fld i
			fld dva
			fmul
			fld dva
			fadd
			fst r
			fdiv
			fld x
			fld i
			fmul
			fptan
			fdivr
			fmul
			fld sum
			fadd
			fst r
			fld i
			fld1
			fadd
			fstp i

			fstp sum
			finit
			jmp start
			end1 :
		nop
	}
	return sum;

}
double sin(double x, double n)
{
	double eps = 0.005;
	double m = 200;
	double l, l1;
	double  e, x1, x2;
	double sum = 0.0;
	double dva = 2.0;
	double  i = 0.0;
	double fact = 1.0;
	double m12 = -1.0;
	double minys = 1.0;
	double PI = 3.1415926535897932;
	_asm

	{
		fld x
		fld n
		fmul
		fstp x
		srav :
		fld PI
			fcom x
			fstsw ax
			sahf
			ja nachalo
			fld x
			fld PI
			fsub
			fld PI
			fsub
			fstp x
		finit
			jmp srav
			nachalo :
		fld fact
			fstp l
			fld l
			fstp l1
			fld x
			fstp x1

			start0 :
		fstp e
			fldz
			fcom i
			fstsw ax
			sahf
			jz start
			fld l1
			fld1
			fadd
			fstp l

			fld l
			fld1
			fadd
			fstp l1
			fld fact
			fld l
			fmul
			fld l1
			fmul
			fst e
			fstp fact
			fld minys
			fld m12
			fst e
			fmul

			fst e
			fstp minys
			fld x
			fld x1
			fmul
			fld x1
			fmul
			fstp x
		
		start:
		fld m

			fst e
			fcom i
			fstsw ax
			sahf
			jb end1
			if1 :
		fstp m
			fld x
			fld fact
			fdiv
			fst e
			fld minys
			fmul
			fst e
			fld sum
			fadd
			fst e
			fstp sum
			fld i
			fld1
			fadd
			fstp i
			finit
			jmp start0
			end1 :
		nop
	}
	return  sum;



}
double cos(double x, double n)
{
	double eps = 0.005;
	double m = 200;
	double l, l1;
	double  e, x1, x2;
	double sum = 0.0;
	double dva = 2.0;
	double  i = 0.0;
	double fact = 2.0;
	double m12 = -1.0;
	double minys = -1.0;
	double PI = 3.1415926535897932;
	_asm

	{
		fld x
		fld n
		fmul
		fstp x
		srav :
		fld PI
			fcom x
			fstsw ax
			sahf
			ja nachalo
			fld x
			fld PI
			fsub
			fld PI
			fsub
			fstp x
			finit
			jmp srav
			nachalo :
		fld x
			fld x
			fmul
			fstp x2
			//fld fact
			//	fstp l
			fld fact
			fstp l
			fld l
			fstp l1
			fld x
			fstp x1
			fstp e
			fstp e
			start0 :
		fstp e
			fldz
			fcom i
			fstsw ax
			sahf
			jz start
			fld l
			fld1
			fadd
			fstp l

			fld l1
			fld1
			fadd
			fstp l

			fld l
			fld1
			fadd
			fstp l1
			fld fact
			fld l
			fmul
			fld l1
			fmul
			fst e
			fstp fact
			fld minys
			fld m12
			fst e
			fmul

			fst e
			fstp minys
			fld x2
			fld x1
			fmul
			fld x1
			fmul
			fstp x2
		finit
		start:
		fld m

			fst e
			fcom i
			fstsw ax
			sahf
			jb end1
			if1 :
		fstp m
			fld x2
			fld fact
			fdiv
			fst e
			fld minys
			fmul
			fst e
			fld sum
			fadd
			fst e
			fstp sum
			fld i
			fld1
			fadd
			fstp i
			finit
			jmp start0
			end1 :
		fld sum
			fld1
			fadd
			fstp sum
			fstp e

	}
	return sum;



}
double ctg(double a, double b)
{
	double c = (b) / (a);

	return (c);
}
double sumteil(double x, double m)
{
	double ctg;
	double l;
	double q, w, e, r, t;
	double vosem = 8.0;
	double sum = 0.0;
	double dva = 2.0;
	double  i = 1.0;
	double j = 1.0;
	double y = 1.0;
	_asm
	{
		fld y
		fstp i

		start :
		fld m
			fld x
			fstp l
			fld j
			fstp y

			fcom i
			fstsw ax
			sahf
			jb end1
			if1 :
		fstp m
			fld i
			fld dva
			fmul
			fld1
			fadd
			fst w
			cmp1 :
		fcom y
			fstsw ax
			sahf
			jbe cont
			fld l
			fld x
			fst t
			fmul
			fst t
			fstp l
			fst t
			fld1
			fld y
			fadd
			fstp y
			jmp cmp1
			cont :
		fst e
			fst r
			fld l
			fst r
			fld i
			fld dva
			fmul
			fld dva
			fadd
			fst r
			fdiv
			fmul
			fld sum
			fadd
			fst r
			fld i
			fld1
			fadd
			fstp i

			fstp sum
			add esi, 8
			finit

			jmp start
			end1 :
		nop
	}
	return sum;

}
