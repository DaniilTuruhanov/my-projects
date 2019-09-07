using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SortByBits
{
    class Kata
    {
        public static int[] SortByBit(int[] array)
        {
            string[] strarray =new string [array.Length]; 
            int t = 0;
            foreach(int i in array)
            {
                strarray[t] = Convert.ToString(i, 2);
                t++;
            }
            t = 0;
            var x = strarray.OrderBy(n => n.Where(v => v == '1').Count()).ThenBy(n=> Convert.ToInt32(n, 2));
            foreach (string i in x)
            {
                array[t] = Convert.ToInt32(i, 2);
                t++;
            }
            return array;
        }
  
    static void Main(string[] args)
        {
        int[] k = { 3, 8, 3, 6, 5, 7, 9, 1 };
            int[] h = SortByBit(k);
            Console.WriteLine(h);
            Console.ReadKey();
        }
    }
}
