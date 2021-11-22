import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  GenericScalar: any;
  UploadType: any;
};

export type CoreMutation = {
  __typename?: 'CoreMutation';
  userCreate?: Maybe<UserCreateMutationPayload>;
  userUpdate?: Maybe<UserUpdateMutationPayload>;
  userDelete?: Maybe<UserDeleteMutationPayload>;
  login?: Maybe<ObtainJsonWebToken>;
  refresh?: Maybe<Refresh>;
};


export type CoreMutationUserCreateArgs = {
  input: UserCreateMutationInput;
};


export type CoreMutationUserUpdateArgs = {
  input: UserUpdateMutationInput;
};


export type CoreMutationUserDeleteArgs = {
  input: UserDeleteMutationInput;
};


export type CoreMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type CoreMutationRefreshArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};

export type CoreQuery = {
  __typename?: 'CoreQuery';
  currentUser?: Maybe<UserNode>;
  users?: Maybe<Array<Maybe<UserNode>>>;
};

export type MutationErrorType = {
  __typename?: 'MutationErrorType';
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type UserCreateMutationInput = {
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
  email: Scalars['String'];
  dateJoined?: Maybe<Scalars['DateTime']>;
  isSuperuser?: Maybe<Scalars['Boolean']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  userPermissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['UploadType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserCreateMutationPayload = {
  __typename?: 'UserCreateMutationPayload';
  errors?: Maybe<Array<MutationErrorType>>;
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserNode>;
};

export type UserDeleteMutationInput = {
  id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserDeleteMutationPayload = {
  __typename?: 'UserDeleteMutationPayload';
  errors?: Maybe<Array<MutationErrorType>>;
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserNode>;
};

export type UserNode = {
  __typename?: 'UserNode';
  id: Scalars['ID'];
  password: Scalars['String'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  isSuperuser: Scalars['Boolean'];
  username: Scalars['String'];
  email: Scalars['String'];
  dateJoined: Scalars['DateTime'];
  isActive: Scalars['Boolean'];
  avatar?: Maybe<Scalars['String']>;
};

export type UserUpdateMutationInput = {
  password?: Maybe<Scalars['String']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  dateJoined?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  isSuperuser?: Maybe<Scalars['Boolean']>;
  groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  userPermissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isActive?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<Scalars['UploadType']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type UserUpdateMutationPayload = {
  __typename?: 'UserUpdateMutationPayload';
  errors?: Maybe<Array<MutationErrorType>>;
  clientMutationId?: Maybe<Scalars['String']>;
  user?: Maybe<UserNode>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'CoreMutation', login?: { __typename?: 'ObtainJSONWebToken', token: string } | null | undefined };

export type UserFieldsFragment = { __typename?: 'UserNode', username: string };

export type OtherFieldsFragment = { __typename?: 'UserNode', email: string };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'CoreQuery', users?: Array<{ __typename?: 'UserNode', username: string, email: string } | null | undefined> | null | undefined };

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on UserNode {
  username
}
    `;
export const OtherFieldsFragmentDoc = gql`
    fragment OtherFields on UserNode {
  email
}
    `;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const CurrentUserDocument = gql`
    query currentUser {
  currentUser {
    ...UserFields
  },
  currentUser {
    email
  }
}
    ${UserFieldsFragmentDoc}`;

export function useCurrentUserQuery(options: Omit<Urql.UseQueryArgs<never, CurrentUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<CurrentUserQuery>({ query: CurrentUserDocument, ...options });
};

export const UsersDocument = gql`
query {
  users {
    username
    email
  }
}
    `;

export interface User {
  __typename: 'UserNode'
  username: String
  email: String
}

export type CurrentUserQuery = { __typename?: 'Query', currentUser?: User };


export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};