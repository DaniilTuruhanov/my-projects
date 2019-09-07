using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DoubleCola
{
    public class Line
    {
        public static string WhoIsNext(string[] names, long n)
        {
            int buf = names.Length;
            int ind = 0;
            while (n > buf)
            {
                n -= buf;
                buf *= 2;
            }

            return n % (buf / names.Length) > 0 ? names[n / (buf / names.Length)] : names[n / (buf / names.Length) - 1];
        }
    
    static void Main(string[] args)
        {
            string[] names = new string[] { "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" };
            Console.WriteLine(WhoIsNext(names, 52));
            Console.ReadKey();
        }
    }
}
/*using System;

public class Line
    {
        public static string WhoIsNext(string[] names , long n)
        { 
            long x = 5;
            long i = 1;
  
            while (n > x)
            {
                n -= x;
                x *= 2;
                i *= 2;
            }
            
            return (names[(n - 1)/i]);
        }
    }
    
     using System;

public class Line
{
    public static string WhoIsNext(string[] names , long n)
    {
        var l = names.Length;
        return n <= l ? names[n - 1] : WhoIsNext(names, (n - l + 1) / 2);
    }
}
     
     
     
     
     
     
     
     */


