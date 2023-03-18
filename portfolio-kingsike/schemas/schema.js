import schemaType from 'all:part:@sanity/base/schema-type';
// import { createSchema } from 'sanity';

import pageInfo from './pageInfo.js';


export default createSchema({
    name: "default",
    types: schemaTypes.concat([
        pageInfo,
    ])
})