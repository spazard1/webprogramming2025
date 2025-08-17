﻿namespace CloudStorage.Services
{
    public class UserNameProvider : IUserNameProvider
    {
        /*
         * Note: this is not the same username as your microsoft account. This is your username without any upper case letters or special characters.
         * For example: 'dragon.keeeper@microsoft.com' would become 'dragonkeeper' here.
         */
        public string UserName => throw new InvalidDataException("Replace this exception with your username.");
    }
}
