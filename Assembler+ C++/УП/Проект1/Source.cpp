//Тюрюханов Даниил Задача B11


//Задан текстовый файл Input.txt, состоящий  из слов. 
//Разделителями между словами является некоторое множество знаков препинания. 
//Найти в каждой строке  пары подряд стоящих слов, у которых одинаковое количество прописных букв, 
//удалить и дописать первое слово из пары в начало  строки, второе - в конец строки.   
//Результат записать  в новый файл Output.txt. 
//Упорядочить слова  в полученных  строках по  убыванию длин слов, результат сортировки записать в файл Out_sort.txt. 


#include <iostream>
#include <cstring>
#include <fstream>
using namespace std;
/////////количество букв в слове
int count(char*a)
{
	int kol = 0;
	_asm
	{
		mov edi, a
		mov ebx, 0
		A2: mov al, byte ptr[edi]
			add edi, 1
			add ebx, 1
			cmp[edi], 0
			jne A2
			mov kol, ebx
	}
	return kol;
}
//////////количество букв в слове
int count1 (char* _str)
{
char blank = '\0';
int len = 0;
_asm {
	mov esi, _str
	lea edi, blank
	LOOP_ :
	cmpsb
		je BREAK
		dec edi
		inc len
		jmp LOOP_
		BREAK :
	nop
}
return len;
}
////////количество строчных букв в слове
int sum123(char *sl)
{
	int kol = 0;
	int c = count(sl);
	for (int i = 0; i<c; i++)
		if ('a' <= sl[i] && sl[i] <= 'z' || 'а' <= sl[i] && sl[i] <= 'я')
			kol += 1;

	return kol;
}

int sum( char *s1)

{
	char *s2 = { "QWERTYUIOPLKJHGFDSAZXCVBNMЙЦУКЕНГШЩЗХЪЭЖДЛОРПАВЫФЯЧСМИТЬБЮЁ" };
	int kol;
	_asm
	{
		mov esi, s1
		mov edi, s2
		//	mov ecx, ebx
		mov edx, 0; счетчик для массива токенов
		start0: mov edi, s2
		start : 
				cmp byte ptr[esi], '\0'; проверка на конец строки
				je endword
				mov al, byte ptr[esi]; строка
				mov ah, byte ptr[edi]; разделители
				cmp al, ah
				jne nextrazdel
				add edx,1
				nextrazdel :
		cmp[edi], 0
			je nextletter
			inc edi
			mov ah, byte ptr[edi]
			cmp al, ah
			jne start
			add edx,1
			nextletter :
			add esi, 1
			jmp start0
			endword:
			mov kol,edx


	}
	return kol;
}



////////обмен значений двух строк
void Swap(char *a, char *b) {
	char *c = new char[80];
	_asm {

		mov esi, a
		mov edi, c
		A1 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A1
	}
	c[count(a)] = '\0';
	_asm {

		mov esi, b
		mov edi, a
		A2 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A2
	}
	a[count(b)] = '\0';
	_asm {
		mov esi, c
		mov edi, b
		A3 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A3



	}
	b[count(c)] = '\0';
}



//////////копирование значение строки b в строку а
void STRCPY1(char *a, char *b)
{
	_asm
	{

		mov esi, b
		mov edi, a
		A1 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A1
	}
	a[count(b)] = '\0';
}
void strtokasm(char* a, char* razdel, char* c)
{
	char *d = new char[80];
	int j = 0;
	int i = 0;
		_asm
		{
			mov esi, a
			mov ebx, c
			mov edi, razdel
			mov ecx, ebx
			mov edx, 0; счетчик для массива токенов
			start0 : add edx,1
			start : mov edi, razdel
		    start1:	cmp byte ptr[esi], '\0'; проверка на конец строки
				 je endword
				mov al, byte ptr[esi]; строка
				mov ah, byte ptr[edi]; разделители
				cmp al, ah
				je strtoks
				jne nextrazdel

				nextrazdel :
			cmp[edi], 0
				je nextletter
				inc edi
				mov ah, byte ptr[edi]
				cmp al, ah
				je strtoks
				mov byte ptr[ebx], al
				jmp start1
				nextletter :
			add ebx, 1
				add esi, 1
				jmp start
				strtoks : nop; если встретили разделитель
				add esi,1
				endword : nop; вовращаем наш токен
				mov byte ptr[ebx], 0
				mov edi,c
				cmp byte ptr[esi], '\0'
				je end12
				cmp byte ptr[edi], '\0'
				
				cmp byte ptr[edi], '\0'
				je start0
				end12://sub esi,ecx
				mov i, edx
		}
		int h = count(c);
		i = h + i - 1;
		_asm
		{
			mov edi, d
			mov esi, a
			mov ecx, 0
			add esi, i
			add esi, 1
			A2 : mov bl, byte ptr[esi]
				 mov byte ptr[edi], bl
				 add esi, 1
				 add ecx, 1
				 add edi, 1
				 cmp[esi], 0
				 jne A2
				 mov byte ptr[edi], 0
				 mov  j, ecx
		}
		_asm {mov esi, a
		mov edi, d
			mov ecx, 0
			A4 : mov al, byte ptr[edi]
			mov byte ptr[esi], al
			add esi, 1
			add ecx, 1
			add edi, 1
			cmp[edi], 0
			jne A4
			mov  j, ecx
		}
		c[i] = '\0'; 
		while (a[j])
		{
			a[j] = '\0';
			j++;
		}
	}

//////////функция strcat с использованием ассемблера
void STRCAT1(char *a, char *b)
{
	char *c = new char[80];
	_asm {

		mov esi, a
		mov edi, c
		A1 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A1
			 mov esi, b
			 A3 : mov al, byte ptr[esi]
				  mov byte ptr[edi], al
				  add esi, 1
				  add edi, 1
				  cmp[esi], 0
				  jne A3
	}
	c[count(a) + count(b)] = '\0';
	_asm
	{
		mov esi, c
		mov edi, a
		A4 : mov al, byte ptr[esi]
			 mov byte ptr[edi], al
			 add esi, 1
			 add edi, 1
			 cmp[esi], 0
			 jne A4



	}
	a[count(c)] = '\0';
}

void STRCPY1Rep(char *a, char *b)
{
	char *c = new char[80];
	char nul = '\0';
	int n = count(a);
	_asm //STRCPY1 с  цепочечными командами

	{
		mov ax, ds
		mov es, ax
		mov esi, a
		mov edi, c
		mov ecx, n
		inc ecx
		rep     movsb
	}
}
////////функция сортировки слов по количеству букв
/*void sort_A(char **A, int n)
{
	_asm
	{
		mov eax, 
		mov ebx, temp
		mov ecx, pred //item
		mov edx, j //counter
		for1 : mov ebx, [eax + edx * 4] //for
			   mov ecx, edx
			   dec ecx

			   cmp ecx, 0 // while
			   JB metka
			   cmp[eax + ecx * 4], ebx
			   JBE metka
			   //ОШИБКА ВРОДЕ БЫ ТУТ!!!
			   mov esi, [eax + 4 + ecx * 4]
			   mov esi, [eax + ecx * 4] //mas[item+1]=mas[item]
			   mov edi, [eax + ecx * 4]
			   mov edi, ebx //mas[item]=temp
			   dec ecx

			   metka : inc edx
					   cmp edx, n
					   JBE for1
	}
}*/
////////////основная функция
void Word(char *str, char *c, char *v, char *seps)
{
	char **a = new char*[80];
	for (int i = 0; i < 80; i++)
		a[i] = new char[80];
	char *b = new char[80];
		strtokasm(str, seps,b);
	int k = 0;
	while (strcmp(b,""))
	{
		STRCPY1(a[k], b);
		strtokasm(str, seps, b);
		k++;
	}
	int y = 0;

	for (int i = 0; i < k - 2; i++)

	{
		if (sum(a[i]) == sum(a[i + 1])) {

			int x1 = i;
			int x2 = i + 1;
			while (x1 > y)
			{
				Swap(a[x1], a[x1 - 1]);
				x1--;
			}
			while (x2 < k - 1 - y)
			{
				Swap(a[x2], a[x2 + 1]);
				x2++;
			}
			y++;
		}
	}
	STRCPY1(c, a[0]);
	int l = count(c);
	c[l] = ' ';
	c[l + 1] = '\0';
	for (int i = 1; i < k; i++) {
		STRCAT1(c, a[i]);
		l = count(c);
		c[l] = ' ';
		c[l + 1] = '\0';
	}
	c[l] = '\0';
	for (int i = 0; i < k - 1; i++) {
		for (int j = i + 1; j < k; j++) {
			if (count(a[i]) < count(a[j])) {
				Swap(a[i], a[j]);
			}
		}
	}
	STRCPY1(v, a[0]);
	l = count(v);
	v[l] = ' ';
	v[l + 1] = '\0';
	for (int i = 1; i < k; i++) {
		strcat(v, a[i]);
		l = count(v);
		v[l] = ' ';
		v[l + 1] = '\0';
	}
	v[l] = '\0';
	delete[] a;
	delete[] b;
}

void main() {
	char seps[] = { ", ./;:&!?#^@*)([]{'}" };
	//char razd[] = { "qwertyuiopasdfghjklzxcvbnmйцукенгшщзхъэждлорпавыфячсмитьбюё" };
	ifstream in;
	ofstream out;
	ofstream outS;
	in.open("input.txt");
	out.open("output.txt");
	outS.open("Out_sort.txt");
	while (!in.eof())
	{
		char *c = new char[500];
		char *v = new char[500];
		char *str = new char[80];
		in.getline(str, 80);
		Word(str, c, v, seps);
		outS << v << endl;
		out << c << endl;
		delete[] v;
		delete[] c;
		delete[] str;
	}
	out.close();
	outS.close();
	system("pause");
}





