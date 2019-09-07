using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Scramblies
{
    class Program
    {
        public static bool Scramble(string str1, string str2)
        {
            foreach(char n in str2.ToCharArray())
            {
                if (str1.IndexOf(n.ToString()) != -1)
                    str1=str1.Remove(str1.IndexOf(n.ToString()), 1);
                else return false;
            }
            return true;
    }

        static void Main(string[] args)
        {
            Console.WriteLine(Scramble("scriptjavx", "javascript"));
            Console.ReadKey();
        }
    }
}
/*using System;
using System.Linq;
public class Scramblies 
{
    
    public static bool Scramble(string str1, string str2) 
    {
        return str2.All(x=>str1.Count(y=>y==x)>=str2.Count(y=>y==x));
    }

}*/
