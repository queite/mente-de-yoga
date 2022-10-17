import React from 'react';
import { AdminMain, AdminContent } from './AdminConfigurations.styles';

export default function AdminConfigurations() {
  return (
    <AdminMain>
      <AdminContent>
        <div>
          <button type="button">Alunos</button>
          <button type="button">Sutras</button>
          <button type="button">Vocabulário</button>
          <button type="button">Artigos</button>
        </div>
        <div>
          <p>sutra 1</p>
          <p>sutra 1</p>
          <p>sutra 1</p>
          <p>sutra 1</p>
        </div>
      </AdminContent>
    </AdminMain>
  );
}
