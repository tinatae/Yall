export const fetchBusinesses = data => (
    $.ajax({
        method: 'GET',
        url: 'api/businesses',
        data
    }) 
);

export const fetchBusiness = id => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${id}`,
    })
);

export const createBusiness = newBizForm => (
    $.ajax({
        method: 'POST',
        url: 'api/businesses',
        data: newBizForm,
        contentType: false,
        processData: false
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
);

export const fetchReview = businessId => (
    $.ajax({
        method: 'GET',
        url: `api/businesses/${id}`,
    })
);

export const deleteReview = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/reviews/${id}`
    })
);