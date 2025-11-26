using Microsoft.Win32.SafeHandles;

namespace ImmutableStack
{
    internal class Program
    {
        static void Main()
        {
            ImmutableStack stack = ImmutableStack.Empty;
            stack = stack.Push("Hello");
            stack = stack.Push("Web Programming");
            stack = stack.Push("Portal");
            stack = stack.Push("Gargoyles");
            stack = stack.Push("Graphics");

            while (!stack.IsEmpty())
            {
                Console.WriteLine(stack.Peek());
                stack = stack.Pop();
            }
            Console.ReadLine();
        }
    }
}
