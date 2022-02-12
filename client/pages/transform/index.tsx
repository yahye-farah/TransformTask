import axios from 'axios';
import TransformList from '../../components/TransformList';
import { Transform } from '../../interface/Transform';

export interface Props {
  transformList: Transform[];
}

export default function Transformation({ transformList }: Props) {
  return <TransformList transformList={transformList} />;
}

export const getServerSideProps = async () => {
  console.log('you come here');
  const resp = await axios.get(`${process.env.API}/transformation`);

  return {
    props: {
      transformList: resp.data,
    },
  };
};
