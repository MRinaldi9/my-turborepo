import { createStore, select, setProp, withProps } from "@ngneat/elf";
import { createEffectFn, tapResult } from "@ngneat/effects";
import {
  catchError,
  combineLatest,
  EMPTY,
  shareReplay,
  Subject,
  switchMap,
  tap,
} from "rxjs";
import { fromFetch } from "rxjs/fetch";
import {
  createRequestsStatusOperator,
  selectRequestStatus,
  updateRequestStatus,
  withRequestsStatus,
} from "@ngneat/elf-requests";
import { devTools } from "@ngneat/elf-devtools";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

type AuthStore = {
  user: User | null;
};

if (import.meta.env.DEV) {
  devTools({ name: "common-store", maxAge: 50 });
}

const initialState: AuthStore = {
  user: null,
};

const authStore = createStore(
  { name: "auth" },
  withProps<AuthStore>(initialState)
);

const destroy$ = new Subject<boolean>();
export const getUser = createEffectFn<void>((source$) =>
  source$.pipe(
    switchMap(() =>
      fromFetch<User>("https://jsonplaceholder.typicode.com/users/1", {
        selector: (response) => response.json(),
      }).pipe(
        tapResult(
          (user) => {
            authStore.update(setProp("user", user));
          },
          () => authStore.update(setProp("user", null))
        )
      )
    )
  )
)(destroy$);

export const user$ = authStore.pipe(select(({ user }) => user));
