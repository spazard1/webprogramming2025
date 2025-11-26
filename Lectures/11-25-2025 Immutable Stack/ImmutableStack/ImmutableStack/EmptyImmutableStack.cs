using System;
using System.Collections.Generic;
using System.Text;

namespace ImmutableStack
{
    internal class EmptyImmutableStack:ImmutableStack
    {
        internal EmptyImmutableStack()
        {

        }
        
        public override bool IsEmpty()
        {
            return true;
        }

        public override ImmutableStack Push(object var)
        {
            return new ImmutableStack(this, var);

        }

        public override ImmutableStack Pop()
        {
            throw new InvalidOperationException("Tried to call pop on an empty stack");
        }

        public override object? Peek()
        {
            return new InvalidOperationException("Tried to call peek on an empty stack");
        }
    }
}
