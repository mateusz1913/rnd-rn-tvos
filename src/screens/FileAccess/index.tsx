import React, { useEffect, useState } from 'react';
import { Platform, TVTextScrollView, Text, View } from 'react-native';
import { Dirs, FileSystem } from 'react-native-file-access';
import { SafeAreaView } from 'react-native-safe-area-context';

import { commonStyles } from '../../common/styles';
import Header from '../../components/Header';

import { styles } from './styles';

/** Copied from react-native-file-access example repo */
const FileAccessExample: React.FC = () => {
  const [ info, setInfo ] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    // Directory constants.
    setInfo([
      { key: 'CacheDir', value: Dirs.CacheDir },
      { key: 'DatabaseDir', value: Dirs.DatabaseDir ?? '<undefined>' },
      { key: 'DocumentDir', value: Dirs.DocumentDir },
      { key: 'LibraryDir', value: Dirs.LibraryDir ?? '<undefined>' },
      { key: 'MainBundleDir', value: Dirs.MainBundleDir },
      { key: 'SDCardDir', value: Dirs.SDCardDir ?? '<undefined>' },
    ]);

    if (Platform.OS === 'android') {
      // Deletes and asset extraction.
      FileSystem.unlink(Dirs.CacheDir + '/BundledData.txt')
        .then(() => console.log('Deleted BundledData.txt'))
        .catch(() => console.log('Did not delete BundledData.txt'))
        .then(() => {
          return FileSystem.cpAsset(
            'BundledData.txt',
            Dirs.CacheDir + '/BundledData.txt'
          );
        })
        .then(() => FileSystem.readFile(Dirs.CacheDir + '/BundledData.txt'))
        .then((res) =>
          setInfo((prev) => {
            prev.push({
              key: 'readFile(CacheDir/BundledData.txt)',
              value: JSON.stringify(res),
            });
            return prev.slice();
          })
        )
        .catch(() => console.log('Did not process BundledData.txt'));
    }

    if (Platform.OS === 'android') {
      FileSystem.cpAsset(
        'raw/android_resource',
        Dirs.CacheDir + '/android_resource.txt',
        'resource'
      )
        .then(() =>
          FileSystem.readFile(Dirs.CacheDir + '/android_resource.txt')
        )
        .then((res) =>
          setInfo((prev) => {
            prev.push({
              key: 'readFile(CacheDir/android_resource.txt)',
              value: JSON.stringify(res),
            });
            return prev.slice();
          })
        );
    }

    // Disk usage.
    FileSystem.df().then((res) =>
      setInfo((prev) => {
        prev.push({ key: 'df()', value: JSON.stringify(res) });
        return prev.slice();
      })
    );

    FileSystem.exists(Dirs.CacheDir).then((res) =>
      setInfo((prev) => {
        prev.push({ key: 'exists(CacheDir)', value: JSON.stringify(res) });
        return prev.slice();
      })
    );

    FileSystem.isDir(Dirs.DocumentDir).then((res) =>
      setInfo((prev) => {
        prev.push({ key: 'isDir(DocumentDir)', value: JSON.stringify(res) });
        return prev.slice();
      })
    );

    FileSystem.ls(Dirs.MainBundleDir).then((res) =>
      setInfo((prev) => {
        prev.push({ key: 'ls(MainBundleDir)', value: JSON.stringify(res) });
        return prev.slice();
      })
    );

    // Read/write strings.
    FileSystem.writeFile(Dirs.CacheDir + '/test.txt', 'Data file in CacheDir.')
      .then(() => FileSystem.readFile(Dirs.CacheDir + '/test.txt'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'readFile(CacheDir/test.txt)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      )
      .then(() => FileSystem.hash(Dirs.CacheDir + '/test.txt', 'MD5'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'hash(CacheDir/test.txt, MD5)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      );

    FileSystem.writeFile(
      Dirs.CacheDir + '/base64.txt',
      'QmFzZTY0IGRhdGEu',
      'base64'
    )
      .then(() => FileSystem.readFile(Dirs.CacheDir + '/base64.txt'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'readFile(CacheDir/base64.txt)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      );

    FileSystem.writeFile(Dirs.CacheDir + '/1.txt', 'File 1.')
      .then(() => FileSystem.writeFile(Dirs.CacheDir + '/2.txt', 'File 2.'))
      .then(() => FileSystem.appendFile(Dirs.CacheDir + '/1.txt', 'Appended.'))
      .then(() =>
        FileSystem.concatFiles(
          Dirs.CacheDir + '/1.txt',
          Dirs.CacheDir + '/2.txt'
        )
      )
      .then(() =>
        FileSystem.mv(Dirs.CacheDir + '/2.txt', Dirs.CacheDir + '/renamed.txt')
      )
      .then(() => FileSystem.readFile(Dirs.CacheDir + '/renamed.txt'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'append/concat',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      )
      .catch(() => console.log('Did not process renamed.txt'));

    const sourcFile =
      Platform.OS === 'ios' || Platform.OS === 'macos'
        ? `${Dirs.CacheDir}/renamed.txt`
        : `file://${Dirs.CacheDir}/renamed.txt`;

    FileSystem.unlink(Dirs.CacheDir + '/3.txt')
      .then(() => console.log('Deleted 3.txt'))
      .catch(() => console.log('Did not delete 3.txt'))
      .then(() => FileSystem.cp(sourcFile, Dirs.CacheDir + '/3.txt'))
      .then(() => FileSystem.readFile(Dirs.CacheDir + '/3.txt'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'cp(fileUris)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      )
      .catch(() => console.log('Did not process 3.txt'));

    // Network access.
    FileSystem.fetch('https://example.com', {
      path: Dirs.CacheDir + '/download.html',
    })
      .then((res) => {
        setInfo((prev) => {
          prev.push({
            key: 'fetch(https://example.com)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        });
        return FileSystem.readFile(Dirs.CacheDir + '/download.html');
      })
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'fetch(https://example.com)',
            value: res.substring(0, 64),
          });
          return prev.slice();
        })
      )
      .then(() => FileSystem.stat(Dirs.CacheDir + '/download.html'))
      .then((res) =>
        setInfo((prev) => {
          prev.push({
            key: 'stat(CacheDir/download.html)',
            value: JSON.stringify(res),
          });
          return prev.slice();
        })
      );
  }, []);

  return <SafeAreaView style={commonStyles.screenContainer}>
    <Header title="File Access" />
    <View style={commonStyles.screenContainer}>
      <TVTextScrollView style={styles.scrollView}>
        {info.map((row, i) => <View key={i} style={styles.row}>
          <Text style={styles.label}>{row.key}</Text>
          <Text style={styles.value}>{row.value}</Text>
        </View>)}
      </TVTextScrollView>
    </View>
  </SafeAreaView>;
};

export default FileAccessExample;
