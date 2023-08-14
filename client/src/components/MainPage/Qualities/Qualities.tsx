import React from 'react';
import ServicesCompanies from '../ServicesCompanies/ServicesCompanies';

const posts = [
  {
    id: 1,
    title: 'Бесплатный доступ',
    description:
      'Просматривайте актуальный список стран, где вы можете подать заявление на визу, без регистрации и какой-либо платы.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },

  {
    id: 1,
    title: 'Пошаговое руководство',
    description:
      'Просто зарегистрируйтесь на сайте, чтобы получить детальное руководство, которое проведет вас через весь процесс получения визы цифрового кочевника.',
  },
  {
    id: 1,
    title: 'Консультация экспертов',
    description:
      'Если у вас возникли вопросы или вам нужна консультация, наши специалисты из KYC Consulting всегда готовы помочь.',
  },
];

export default function Qualities() {
  return (
    <>
      {' '}
      <div className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="text-3xl tracking-tight  text-gray-900 dark:text-white">
              Особенности Digital Nomad Calculator{' '}
            </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
          </div>
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className=" text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-900">
                    <span className="absolute inset-0 mb-4" />
                    {post.title}
                  </h3>

                  {/* <p className="mt-5  text-sm leading-6 text-gray-600">{post.description}</p> */}
                  <p className="mt-2 font-light text-gray-900  sm:text-l dark:text-gray-700 ">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto max-w-4xl text-center mt-24 mb-20">
            <h2 className="text-2xl tracking-tight  text-gray-800 dark:text-white">
              Реализуйте свои глобальные рабочие амбиции с помощью Digital Nomad Calculator. Живите
              и работайте там, где вам хочется, а мы поможем на любом этапе пути.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
