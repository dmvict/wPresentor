
const _ = _global_.wTools;
_.include( 'wFilesHttp' );
const dataStr = _.fileProvider.fileRead( _.path.join( _.path.current(), 'Courses.stxt' ) );
const parser = _.stxt.Parser({ dataStr });
parser.form();

console.log( parser );