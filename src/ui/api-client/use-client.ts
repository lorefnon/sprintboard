import { inject } from 'vue';
import { throwIfN } from '../../server/utils/coercions';
import { type Client } from './index';

export const useGQLClient = () => throwIfN(inject<Client>("gql"), "graphqlAPIClient");
