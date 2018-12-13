
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DataRepository
{
    public interface IRepository<T> where T : class
    {
        T Add(T entity);
        //bool Add(IEnumerable<TEntity> items);
        T Update(T entity);
        T Delete(T entity);
        //bool Delete(IEnumerable<TEntity> entities);
        T FindBy(int id);
        T FindBy<TV>(TV id);
        IQueryable<T> All();
        T FindBy(Expression<Func<T, bool>> expression);
        IQueryable<T> FilterBy(Expression<Func<T, bool>> expression);
    }
}
