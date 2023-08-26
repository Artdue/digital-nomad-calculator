import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

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
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center lg:mb-8 md:mb-4">
            <h1 className="text-[#337CE5] lg:text-4xl md:text-4xl text-2xl font-medium">
              Особенности Digital Nomad Calculator
            </h1>
          </div>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.id} className="flex w-full">
                <Card className="mt-6 bg-[#F3F4F6] w-full flex flex-col">
                  <CardBody className="flex-grow">
                    <Typography variant="h5" className="mb-2 text-[#233862]">
                      {post.title}
                    </Typography>
                    <Typography>{post.description}</Typography>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
}
