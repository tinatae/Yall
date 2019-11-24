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

export const createBusiness = businessForm => (
    $.ajax({
        method: 'POST',
        url: 'api/businesses',
        data: businessForm,
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
