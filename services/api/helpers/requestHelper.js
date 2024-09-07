exports.requestHelper = (res, next, data, totalItem) => {
    try {
        if (data.length === 0) {
            const error = new Error('Data not found.');
            error.statusCode = 404;            
            throw error;
          }        
    
        res.status(200).json({
            data,
            totalItem: totalItem? totalItem : null
        })
    } catch(err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    } 
}