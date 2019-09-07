using System;
public class StringExtensions
{
    public static bool isUpperCase(string str)
    {
        return String.Compare(str, str.ToUpper()) == 0 ? true : false;
    }
    public static void Main(string[] args)
    {
        isUpperCase("SEGWEGWGEG");
    }
}