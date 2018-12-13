
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace DataRepository
{
    public interface IRepository<TEntity> where TEntity : class
    {
        bool Add(TEntity entity);
        bool Add(IEnumerable<TEntity> items);
        bool Update(TEntity entity);
        bool Delete(TEntity entity);
        bool Delete(IEnumerable<TEntity> entities);
        TEntity FindBy(int id);
        TEntity FindBy<TV>(TV id);
        IQueryable<TEntity> All();
        TEntity FindBy(Expression<Func<TEntity, bool>> expression);
        IQueryable<TEntity> FilterBy(Expression<Func<TEntity, bool>> expression);
    }
}
