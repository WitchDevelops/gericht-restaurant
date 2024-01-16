import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Subheading } from '../../components';
import { motion } from 'framer-motion';
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Subheading title="Newsletter" />
        </motion.div>

        <motion.h2
          className="headtext__cormorant app__newsletter--title"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          Subscribe To Our Newsletter
        </motion.h2>
        <motion.p
          className="p__opensans"
          initial={{ opacity: 0 }}
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          And never miss latest updates!
        </motion.p>
      </div>

      {
        submitted ? (
          <div className="app__newsletter--form-success">
            <h3 className="app__newsletter--form-success-text">Thank you for subscribing!</h3>
          </div>
        ) : (

          <motion.form
            className="app__newsletter--form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <div className="app__newsletter--form-wrapper">
              {errors.email &&
                <p className="app__newsletter--form-error">{errors.email?.message}</p>
              }
              <div className="app__newsletter--form-input-wrapper">
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
              </div>
            </div>



          </motion.form>
        )
      }


    </section>
  )
}

export default Newsletter