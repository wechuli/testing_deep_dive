using System;

namespace bird
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }

    public class Bird
    {
        public int height = 0;
        public int location = 0;

        public Bird()
        {

        
        }
        public void Fly()
        {
            var rand = new Random();
            height += rand.Next(10) + 1;
            location += rand.Next(10) + 1;

            Console.WriteLine($"{height}, {location}");
        }
    }
}
