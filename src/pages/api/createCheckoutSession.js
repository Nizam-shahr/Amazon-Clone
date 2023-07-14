const stripe = require('stripe')(process.env.stripe_public_key)

export default async(req, res) => {
    const {email, items} = req.body;

    const transformedItems = items.map((item)=> ({
            description: item.description,
            quantity:1,
            price_data:{
                currency: 'gbp',
                unit_amount: item.price * 100,
                product_data :{
                    name: item.title,
                    images: [item.image],
                }
            }
    }));

    const session = await stripe.checkout.session.create ({
        payment_method_types: ['card'],
        shipping_rates:['shr_1NThRGHrb8vroVtoGvsRx1eB'],
        shipping_address_collections: {
            allowed_countries: ['NG', 'GB', 'US', 'CA'],
        },
        line_items: transformedItems,
        mode:'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata : {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })
    res.status(200).json({id : session.id});
}