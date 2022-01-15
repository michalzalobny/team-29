import React from 'react';

import { useGetUsers } from 'hooks/useQueries';
import { useAuthContext } from 'context/AuthContext';
import { AnimalTile } from 'components/AnimalTile/AnimalTile';
import { BackendUser } from 'types';

import * as S from './AnimalsManager.styles';
