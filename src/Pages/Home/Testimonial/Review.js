import React from 'react';

const Review = ({ review }) => {

    const { _id, name, review: userReview, location, img } = review;

    return (
        <section className=''>
            <div className="card shadow-2xl ">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className='flex items-center'>
                        <div className="avatar mr-10">
                            <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <figure>
                                <img className='' src={img} alt="" />
                                </figure>
                            </div>
                            <div className='ml-5'>
                                <h5>{name}</h5>
                                <p>{location}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Review;