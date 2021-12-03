import loadable from 'react-loadable';
import LoadingComponent from 'common/loading';

export default function (loader, loading = LoadingComponent) {
  return loadable({ loader, loading });
}
