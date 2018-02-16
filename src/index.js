import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import 'config/ReactotronConfig';
import 'config/DevToolsConfig';

import Header from 'components/Header';
import ItemsList from 'components/ItemsList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },
});

export default class App extends Component {
  state = {
    headerTitle: 'GoNative App',
    items: [
      {
        id: 1,
        title: 'Aprendendo React Native 1',
        author: 'Teeh Amaral',
        description: 'Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native 2',
        author: 'Teeh Amaral',
        description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native 3',
        author: 'Teeh Amaral',
        description: 'É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native 4',
        author: 'Teeh Amaral',
        description: 'E mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
      },
    ],
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={this.state.headerTitle} />
        <ItemsList data={this.state.items} />
      </View>
    );
  }
}
