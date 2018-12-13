using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataRepository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        public bool Add(TEntity entity)
        {
            DbSet<TEntity> d = new DbSet<TEntity>();

        public bool Add(IEnumerable<TEntity> items)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> All()
        {
            throw new NotImplementedException();
        }

        public bool Delete(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public bool Delete(IEnumerable<TEntity> entities)
        {
            throw new NotImplementedException();
        }

        public IQueryable<TEntity> FilterBy(Expression<Func<TEntity, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public TEntity FindBy(int id)
        {
            throw new NotImplementedException();
        }

        public TEntity FindBy<TV>(TV id)
        {
            throw new NotImplementedException();
        }

        public TEntity FindBy(Expression<Func<TEntity, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public bool Update(TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
