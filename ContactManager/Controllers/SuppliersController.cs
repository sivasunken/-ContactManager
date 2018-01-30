using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ContactManager.Context;
using ContactManager.Model;

namespace ContactManager.Controllers
{
    [Produces("application/json")]
    [Route("api/suppliers")]
    public class SuppliersController : Controller
    {
        private readonly ContactContext _context;

        public SuppliersController(ContactContext context)
        {
            _context = context;
        }

        // GET: api/suppliers
        [HttpGet]
        public IEnumerable<Supplier> GetSuppliers()
        {
            return _context.Suppliers.ToList();
        }

        // GET: api/suppliers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSupplier([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var supplier = await _context.Suppliers.SingleOrDefaultAsync(m => m.ID == id);

            if (supplier == null)
            {
                return NotFound();
            }

            return Ok(supplier);
        }

        // PUT: api/suppliers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSupplier([FromRoute] long id, [FromBody] Supplier supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != supplier.ID)
            {
                return BadRequest();
            }

            _context.Entry(supplier).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SupplierExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/suppliers
        [HttpPost]
        public async Task<IActionResult> PostSupplier([FromBody] Supplier supplier)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Suppliers.Add(supplier);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSupplier", new { id = supplier.ID }, supplier);
        }

        // DELETE: api/suppliers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSupplier([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var supplier = await _context.Suppliers.SingleOrDefaultAsync(m => m.ID == id);
            if (supplier == null)
            {
                return NotFound();
            }

            _context.Suppliers.Remove(supplier);
            await _context.SaveChangesAsync();

            return Ok(supplier);
        }

        private bool SupplierExists(long id)
        {
            return _context.Suppliers.Any(e => e.ID == id);
        }
    }
}