import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import Image1 from "../../images/Review/50 (1).jfif";
import Image2 from "../../images/Review/50 (2).jfif";
import Image3 from "../../images/Review/50 (3).jfif";
import Image4 from "../../images/Review/50 (4).jfif";
import { motion, useAnimation, useInView } from "framer-motion";

const Review = () => {
  const { innerWidth: Width } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <section className="">
        <div className="container px-6 py-12 mx-auto">
          {Width > 631 ? (
            <>
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: -5 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-black">
                    What our costumers have to say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: -40, x: -40 },
                          visible: { opacity: 1, y: 0, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          I recently used the services of this agency, and I am
                          thrilled with the results. The team went above and
                          beyond to ensure that my needs were met. From the
                          initial consultation to the final delivery, their
                          professionalism and attention to detail were evident.
                          They were prompt in responding to my queries and kept
                          me informed throughout the process. The end product
                          exceeded my expectations, and I highly recommend their
                          services to anyone looking for top-notch quality and
                          exceptional customer care.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image1}
                            alt="image1"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">Sam Smith</p>
                            <p className="text-sm dark:text-gray-600">Asus</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 40, x: -40 },
                          visible: { opacity: 1, y: 0, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          I cannot say enough good things about this agency. The
                          level of workmanship they displayed was truly
                          impressive. They understood my vision perfectly and
                          executed it flawlessly. Not only that, but their
                          customer service was outstanding. They were patient,
                          attentive, and always available to address any
                          concerns I had. They delivered the project on time and
                          within budget. I am extremely satisfied with their
                          services and will definitely be using them again in
                          the future.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image2}
                            alt="image2"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Benjamin Mitchell
                            </p>
                            <p className="text-sm dark:text-gray-600">Razer</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </motion.div>
                    </div>
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: -40, x: 40 },
                          visible: { opacity: 1, y: 0, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="p-6 rounded shadow-md bg-blue-200/60"
                      >
                        <p>
                          I have had the pleasure of working with this agency,
                          and I can confidently say that they are a reliable and
                          trustworthy partner. From the moment I engaged their
                          services, they demonstrated a high level of
                          professionalism and expertise. They listened to my
                          requirements attentively and provided valuable
                          insights and suggestions. The team delivered
                          exceptional results within the agreed-upon timeframe.
                          Their commitment to client satisfaction is
                          commendable, and I would not hesitate to recommend
                          them to others.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image3}
                            alt="image3"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Olivia Johnson
                            </p>
                            <p className="text-sm dark:text-gray-600">
                              Microsoft
                            </p>
                          </div>

                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 40, x: 40 },
                          visible: { opacity: 1, y: 0, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="p-6 rounded shadow-md bg-blue-200/30"
                      >
                        <p>
                          I recently engaged this agency for their services, and
                          I am extremely pleased with the outcome. Their
                          attention to detail is second to none. They
                          meticulously handled every aspect of the project,
                          ensuring that nothing was overlooked. The level of
                          care and precision they put into their work is truly
                          remarkable. The team was professional, responsive, and
                          dedicated to delivering a top-notch experience. I am
                          grateful for their expertise and would highly
                          recommend their services to anyone seeking excellence.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image4}
                            alt="image4"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Sophia Davis
                            </p>
                            <p className="text-sm dark:text-gray-600">Dell</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-blue-100/10 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-black">
                    What our costumers have to say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                          I recently used the services of this agency, and I am
                          thrilled with the results. The team went above and
                          beyond to ensure that my needs were met. From the
                          initial consultation to the final delivery, their
                          professionalism and attention to detail were evident.
                          They were prompt in responding to my queries and kept
                          me informed throughout the process. The end product
                          exceeded my expectations, and I highly recommend their
                          services to anyone looking for top-notch quality and
                          exceptional customer care.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image1}
                            alt="image1"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">Sam Smith</p>
                            <p className="text-sm dark:text-gray-600">Asus</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                          I cannot say enough good things about this agency. The
                          level of workmanship they displayed was truly
                          impressive. They understood my vision perfectly and
                          executed it flawlessly. Not only that, but their
                          customer service was outstanding. They were patient,
                          attentive, and always available to address any
                          concerns I had. They delivered the project on time and
                          within budget. I am extremely satisfied with their
                          services and will definitely be using them again in
                          the future.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image2}
                            alt="image2"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Benjamin Mitchell
                            </p>
                            <p className="text-sm dark:text-gray-600">Razer</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-blue-200/60">
                        <p>
                          I have had the pleasure of working with this agency,
                          and I can confidently say that they are a reliable and
                          trustworthy partner. From the moment I engaged their
                          services, they demonstrated a high level of
                          professionalism and expertise. They listened to my
                          requirements attentively and provided valuable
                          insights and suggestions. The team delivered
                          exceptional results within the agreed-upon timeframe.
                          Their commitment to client satisfaction is
                          commendable, and I would not hesitate to recommend
                          them to others.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image3}
                            alt="image3"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Olivia Johnson
                            </p>
                            <p className="text-sm dark:text-gray-600">
                              Microsoft
                            </p>
                          </div>

                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-blue-200/30">
                        <p>
                          I recently engaged this agency for their services, and
                          I am extremely pleased with the outcome. Their
                          attention to detail is second to none. They
                          meticulously handled every aspect of the project,
                          ensuring that nothing was overlooked. The level of
                          care and precision they put into their work is truly
                          remarkable. The team was professional, responsive, and
                          dedicated to delivering a top-notch experience. I am
                          grateful for their expertise and would highly
                          recommend their services to anyone seeking excellence.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src={Image4}
                            alt="image4"
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-lg font-semibold">
                              Sophia Davis
                            </p>
                            <p className="text-sm dark:text-gray-600">Dell</p>
                          </div>
                          <MdVerified
                            size={Width < 631 ? 30 : 40}
                            className="text-green-400 -mr-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Review;
