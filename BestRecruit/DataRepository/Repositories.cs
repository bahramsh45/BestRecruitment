
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Data.Entity;



namespace DataRepository
{
    public class Repository<T> : IRepository<T> where T: class
    {
        private DataBaseImpl.Recruitment db = new DataBaseImpl.Recruitment();
        public T Add(T entity)
        {
             db.Entry(entity).State = EntityState.Added;
             db.SaveChanges();
             return entity;
        }

        public IQueryable<T> All()
        {
            IQueryable<T> dbQuery = db.Set<T>();
            var item = dbQuery.AsNoTracking();
            return item;
        }

        public T Delete(T entity)
        {
            throw new NotImplementedException();
        }

        public IQueryable<T> FilterBy(Expression<Func<T, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public T FindBy(int id)
        {
            throw new NotImplementedException();
        }

        public T FindBy<TV>(TV id)
        {
            throw new NotImplementedException();
        }

        public T FindBy(Expression<Func<T, bool>> expression)
        {
            throw new NotImplementedException();
        }

        public T Update(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
