using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace ConsoleApp1
{
    class Program
    {
        public static bool branches(string str)
        {
            Regex regex = new Regex("[{][}]|[(][)]|[[][]]");
            MatchCollection match = regex.Matches(str);
            while (match.Count>0)
            {
              
                str = regex.Replace(str,"");
                match = regex.Matches(str);
            }
            if (String.Compare(str, "") == 0)
                return true;
            else return false;
        }
        static void Main(string[] args)
        {
            Console.WriteLine(branches("[{()}]"));
        }
    }
}
