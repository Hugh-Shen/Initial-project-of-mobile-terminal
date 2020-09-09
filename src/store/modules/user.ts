import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({
  name: 'user',
  namespaced: true,
  dynamic: true,
  store,
})
export class Practice extends VuexModule {

}

export const practiceModule = getModule(Practice);
