import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { addGlobalUncaughtErrorHandler, loadMicroApp, registerMicroApps, start } from 'qiankun';

const menuCollapseStatusKey = 'menuCollapseStatus';

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
    // hash 路由设置
    return (location) => location.hash.startsWith(routerPrefix);
    // 普通路由设置
    // return (location) => location.pathname.startsWith(routerPrefix);
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public isCollapsed = false;
    public constructor() {
        const menuCollapseStatusKeyStr = localStorage.getItem(menuCollapseStatusKey);
        if (menuCollapseStatusKeyStr) {
            this.isCollapsed = JSON.parse(menuCollapseStatusKeyStr);
        }
    }

    public ngOnInit(): void {
        registerMicroApps(
            [
                {
                    name: 'ng-app', // app name registered
                    entry: '//localhost:8902',
                    container: document.getElementById('ng-app-container'), // 标签id
                    activeRule: genActiveRule('#/ng-app'),
                    props: { microName: '我是父应用呀!', micro: 'micro' },
                },
                // {
                //   name: 'AngularMicroApp', // app name registered
                //   entry: '//localhost:4300',
                //   container: '#angular_micro',
                //   activeRule: genActiveRule('/one'),
                //   props: { microName: '我是父应用呀!' },
                // },
            ],
            {
                // qiankun 生命周期钩子 - 加载前
                beforeLoad: (app: any) => {
                    // 加载子应用前，加载进度条
                    //   NProgress.start();
                    console.log('before load', app.name);
                    return Promise.resolve();
                },
                // qiankun 生命周期钩子 - 挂载后
                afterMount: (app: any) => {
                    // 加载子应用前，进度条加载完成
                    //   NProgress.done();
                    console.log('after mount', app.name);
                    return Promise.resolve();
                },
            },
        );

        /**
        * 添加全局的未捕获异常处理器
        */
        addGlobalUncaughtErrorHandler((event: Event | string) => {
            console.error(event);
            const { message: msg } = event as any;
            // 加载失败时提示
            if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
                console.error("微应用加载失败，请检查应用是否可运行");
            }
        });
    }

    public toggleCollapsed(): void {
        this.isCollapsed = !this.isCollapsed;
        localStorage.setItem(menuCollapseStatusKey, `${this.isCollapsed}`);
    }

}
