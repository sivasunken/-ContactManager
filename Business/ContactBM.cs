using Business.Context;
using Business.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business
{
    class ContactBM
    {
        public List<Customer> GetCustomer()
        {
            List<Customer> list = new List<Customer>();

            using (ContactContext context = new ContactContext)
            {

            }

            return list;
        }
    }
}
