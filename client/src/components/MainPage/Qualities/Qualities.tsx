import React from 'react';

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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Особенности Digital Nomad Calculator{' '}
            </h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5  text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
