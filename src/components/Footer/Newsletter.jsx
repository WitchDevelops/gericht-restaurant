import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Subheading } from '../../components';
import './Newsletter.css';

const Newsletter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data);
    setSubmitted(true);

  };

  return (
    <section className="app__newsletter section__padding">
      <div className="app__newsletter--header">
        <Subheading title="Newsletter" />
        <h2 className="headtext__cormorant app__newsletter--title">Subscribe To Our Newsletter</h2>
        <p className="p__opensans">And never miss latest updates!</p>
      </div>

      {
        submitted ? (
          <div className="app__newsletter--form-success">
            <h3 className="app__newsletter--form-success-text">Thank you for subscribing!</h3>
          </div>
        ) : (
          <form
            className="app__newsletter--form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errors.email &&
              <p className="app__newsletter--form-error">{errors.email?.message}</p>
            }
            <input
              placeholder="Email address"
              className="app__newsletter--form-input"
              name="email"
              {...register(
                "email",
                {
                  required: "Email Address is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })
              }
            />
            <button type="submit" className="custom__button">Subscribe</button>
          </form>
        )
      }


    </section>
  )
}

export default Newsletter