using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WeIrDStRiNgCaSe
{
    class Program
    {
        public static string ToWeirdCase(string s)
        {
            char[] c = s.ToCharArray();
            int len = s.Length;
            int i = 0;
            for (int ind=0;ind<len;ind++)
            {
                if (c[ind]!=' ')
                {
                    if (i % 2 == 0)
                    {
                        c[ind] = Convert.ToChar(c[ind].ToString().ToUpper());
                        i++;
                    }
                    else if (i % 2 == 1)
                    {
                        c[ind] = Convert.ToChar(c[ind].ToString().ToLower());
                        i++;
                    }
                }
                else { i = 0; }
            }
            return new string(c);

        }
       
    }
}
