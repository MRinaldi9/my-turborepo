import { TestBed } from "@angular/core/testing";
import { provideRouter } from "@angular/router";
import { App } from "./app";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
describe("App", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([{ path: "**", component: App }]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
  });

  it("should create the component", () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
