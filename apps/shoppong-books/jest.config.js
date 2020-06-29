module.exports = {
  name: 'shoppong-books',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/shoppong-books',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
