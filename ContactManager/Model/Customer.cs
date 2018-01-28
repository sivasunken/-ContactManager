using System;
using System.Collections.Generic;
using System.Text;

namespace ContactManager.Model
{
    public class Customer : Person
    {
        public DateTime? Birthday { get; set; }
        public string Email { get; set; }
    }
}
