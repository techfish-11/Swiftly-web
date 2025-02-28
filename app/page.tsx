"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDiscord, FaGithub, FaServer, FaLock, FaTools, FaRobot, FaVoteYea, FaShieldAlt, FaClock } from 'react-icons/fa';
import { MdOutlineTranslate } from 'react-icons/md'; // 修正箇所
import { AiOutlineInteraction, AiOutlineSetting } from 'react-icons/ai';
import { BiAnalyse } from 'react-icons/bi';
import { Header } from '@/components/layout/Header';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { ScrollProgress } from "@/components/magicui/scroll-progress";




export default function Home() {
  const [stats, setStats] = useState({
    userCount: 0,
    isLoading: true,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://sw.sakana11.org/api/users');
        const data = await res.json();
        setStats({
          userCount: data.total_users,
          isLoading: false,
        });
      } catch (err) {
        console.error('Failed to fetch stats:', err);
        setStats(s => ({ ...s, isLoading: false }));
      }
    };
    
    fetchStats();
  }, []);

  return (
    <>
      <ScrollProgress className="top-[65px]" />
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <StatsSection stats={stats} />
        <CommandsSection />
        <ServerBoardSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

const HeroSection = () => (
  <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
    <div className="absolute inset-0">
    </div>
    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
          次世代の
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Discord Bot
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          風のように軽快に、サーバーに新しい風を。
          <br />50以上の豊富な機能、そして<span className="font-bold">完全無料</span>。
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1310198598213963858" 
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            <FaDiscord className="text-xl" /> 今すぐ導入する
          </a>
          <a 
            href="https://sakana11.org/swiftly/commands.html" 
            target="_blank"
            className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 px-8 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            コマンド一覧を見る
          </a>
        </div>
      </div>
      <div className="relative aspect-video">
        <Terminal>
          <TypingAnimation>&gt; discord install Swiftly</TypingAnimation>
    
          <AnimatedSpan delay={1500} className="text-green-500">
            <span>✔ Admin privileges: Not required.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={2000} className="text-green-500">
            <span>✔ Webhook permissions: Not required.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={2500} className="text-green-500">
            <span>✔ Additional setup: None required.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3000} className="text-green-500">
            <span>✔ Server Activation.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={3500} className="text-green-500">
            <span>✔ High-Performance Infrastructure.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4000} className="text-green-500">
            <span>✔ 24-hour logging.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={4500} className="text-green-500">
            <span>✔ Minor updates do not require reboots.</span>
          </AnimatedSpan>
    
          <AnimatedSpan delay={5000} className="text-green-500">
            <span>✔ Everything is ready.</span>
          </AnimatedSpan>
    
          <TypingAnimation delay={6500} className="text-muted-foreground">
            Done! Now all you have to do is click Deploy to Server.
          </TypingAnimation>
    
          <TypingAnimation delay={7000} className="text-muted-foreground">
            We look forward to your implementation.
          </TypingAnimation>
        </Terminal>

      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="py-32 bg-gradient-to-b from-white via-sky-50/30 to-sky-50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          サーバーに <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">新たな風</span> を
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Swiftlyは多彩な機能で、あなたのDiscordサーバーをより豊かにします
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <FaServer className="text-4xl text-blue-500" />, title: "高性能サーバー", description: "オンプレミスで運用される高品質なインフラストラクチャ" },
          { icon: <MdOutlineTranslate className="text-4xl text-blue-500" />, title: "透明性の高い運用", description: "オープンソースで、デプロイまでGitHubでオープン" },
          { icon: <AiOutlineInteraction className="text-4xl text-blue-500" />, title: "エンゲージメント向上", description: "サーバーを活性化させる楽しいインタラクション機能" },
          { icon: <BiAnalyse className="text-4xl text-blue-500" />, title: "AI分析機能", description: "高度なAIによるサーバー分析と未来予測" },
          { icon: <FaTools className="text-4xl text-blue-500" />, title: "開発者ツール", description: "プログラマーのための便利なユーティリティ機能" },
          { icon: <FaRobot className="text-4xl text-blue-500" />, title: "音声機能", description: "高性能な音声読み上げシステム" },
          { icon: <FaVoteYea className="text-4xl text-blue-500" />, title: "匿名投票機能", description: "Discord標準ではできない匿名投票機能を実装" },
          { icon: <FaShieldAlt className="text-4xl text-blue-500" />, title: "荒らし対策", description: "短縮URLにも対応した招待リンクのブロックと新規アカウント対策" },
          { icon: <FaClock className="text-4xl text-blue-500" />, title: "時報", description: "１チャンネル３つまで設定可能の時報機能" }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

interface Stats {
  userCount: number;
  isLoading: boolean;
}

const StatsSection = ({ stats }: { stats: Stats }) => (
  <section id="stats" className="py-32 bg-gradient-to-b from-sky-50 via-white to-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-50/10 to-transparent pointer-events-none"></div>
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center w-full md:w-auto"
        >
          <h3 className="text-xl text-gray-600 mb-2">ユーザー数</h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text mb-1">
            {stats.isLoading ? '読込中...' : stats.userCount.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">統計情報は匿名で取得されています</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center w-full md:w-auto"
        >
          <h3 className="text-xl text-gray-600 mb-2">コマンド数</h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text mb-1">
            50+
          </p>
          <p className="text-sm text-gray-500">すべて無料で利用可能</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center w-full md:w-auto"
        >
          <h3 className="text-xl text-gray-600 mb-2">料金</h3>
          <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text mb-1">
            100% 無料
          </p>
          <p className="text-sm text-gray-500">追加料金は一切なし</p>
        </motion.div>
      </div>
    </div>
  </section>
);

const CommandsSection = () => (
  <section id="commands" className="py-32 bg-gradient-to-b from-white via-white to-sky-50/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          豊富な<span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">コマンド</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          使いやすく、多機能なコマンドで、サーバー管理を効率化
        </p>
      </motion.div>
      
      <div className="flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="https://sakana11.org/swiftly/commands.html"
          target="_blank"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2"
        >
          すべてのコマンドを見る
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>
    </div>
  </section>
);

const ServerBoardSection = () => (
  <section id="board" className="py-32 bg-gradient-to-b from-white via-sky-50/50 to-sky-50">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            サーバー<span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">掲示板機能</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            あなたのDiscordサーバーを宣伝しよう！
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><code>/register</code> でサーバーを登録</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><code>/board-setting</code> で説明を追加</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700"><code>/up</code> で表示順位アップ</span>
            </li>
          </ul>
          <a 
            href="https://sw.sakana11.org/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center gap-2"
          >
            掲示板を見る
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
        >
          <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 h-full min-h-[300px] flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-xl font-bold mb-4">サーバー掲示板のイメージ</h3>
              <p className="text-gray-300 mb-6">あなたのサーバーをアピールする掲示板機能</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400">サーバー名</p>
                  <p className="font-medium">Swiftly Community</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <p className="text-sm text-gray-400">メンバー数</p>
                  <p className="font-medium">1,234</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-32 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
    <div className="container mx-auto px-4 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          今すぐSwiftlyを導入しよう
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          完全無料・高機能なDiscord Botで、あなたのサーバーを次のレベルへ
        </p>
        <a 
          href="https://discord.com/oauth2/authorize?client_id=1310198598213963858"
          target="_blank"
          className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center gap-2"
        >
          <FaDiscord className="text-xl" /> 
          導入する
        </a>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Image src="https://sakana11.org/public/swiftly-icon.png" alt="Swiftly Logo" width={40} height={40} className="rounded-full" />
            <h2 className="text-2xl font-bold">Swiftly</h2>
          </div>
          <p className="text-gray-400 mb-4">
            次世代のDiscord Bot体験を提供します。
          </p>
          <div className="flex space-x-4">
            <a href="https://discord.gg/your-server" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaDiscord className="text-2xl" />
            </a>
            <a href="https://github.com/your-repo" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">リンク</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://sakana11.org/swiftly/commands.html" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                コマンド一覧
              </a>
            </li>
            <li>
              <a href="https://sw.sakana11.org/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                サーバー掲示板
              </a>
            </li>
            <li>
              <a href="https://status.sakana11.org/status/swiftly" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                サービスステータス
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">規約</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://sakana11.org/swiftly/terms" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                利用規約
              </a>
            </li>
            <li>
              <a href="https://sakana11.org/swiftly/privacy" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                プライバシーポリシー
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        <p>2024-2025 TechFish_Lab - All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);
