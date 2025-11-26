using System;
using System.Collections.Generic;
using System.Text;

namespace ImmutableStack
{
    /*
     * Who was here
     * Brody
     * Caleb
     * Peyton +1
     * Trey +1
     * Ella
     * Caleb W. +1
     * Matthew W. +1
     * Zack +1
     * Tony +1
     * Kyle +1
     * Luke +1
     * Sam +1
     */
    public class ImmutableStack
    {
        private readonly object? Value;
        private readonly ImmutableStack? Next;
        public static readonly ImmutableStack Empty = new EmptyImmutableStack();

        internal ImmutableStack()
        {

        }

        internal ImmutableStack(ImmutableStack newStack, object newValue)
        {
            this.Next = newStack;
            this.Value = newValue;
        }

        public virtual ImmutableStack Push(object var) {
            return new ImmutableStack(this, var);

        }
        public virtual ImmutableStack Pop()
        {
            if(this.Next == null)
            {
                return Empty;
            }
            return this.Next;
        }

        public virtual object? Peek()
        {
            return this.Value;
        }
        public virtual bool IsEmpty()
        {
            return false;
        }
    }
}
