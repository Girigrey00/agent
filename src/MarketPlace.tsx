import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Users,
  Calculator,
  BarChart3,
  Database,
  PenTool,
  FileText,
  Brain,
  Shield,
  CheckCircle,
  Search,
  Globe,
  Code,
  Activity,
  TrendingUp,
  Grid3X3,
  List,
  Filter,
  Heart,
  Bookmark,
  MessageSquare,
  Info,
  Bot,
  Rocket,
  Wrench,
  Landmark, Building, Building2, Wallet, CreditCard, Coins, Banknote,
  DollarSign, Euro, PoundSterling, Percent, Receipt, Briefcase, PieChart,
  LineChart, ArrowRightLeft, Scale, ShieldCheck, CircleDollarSign,
  BadgeDollarSign, Gem, HandCoins, Vault, ArrowDownUp, BarChart,
  FileSpreadsheet, FileCheck, ClipboardList, History, Key, Lock, Network,
  JapaneseYen, IndianRupee, RussianRuble, SwissFranc, Bitcoin, TrendingDown,
  WalletCards
} from 'lucide-react';
import './MarketPlace.css';
import { agentsData, Agent } from './data';
import { masterAgentsData, MasterAgent } from './masterData';

const bankIcons = [
  Landmark, Building, Building2, Wallet, CreditCard, Coins, Banknote,
  DollarSign, Euro, PoundSterling, Percent, Receipt, Briefcase, PieChart,
  LineChart, ArrowRightLeft, Scale, ShieldCheck, CircleDollarSign,
  BadgeDollarSign, Gem, HandCoins, Vault, ArrowDownUp, BarChart,
  FileSpreadsheet, FileCheck, ClipboardList, History, Key, Lock, Network,
  JapaneseYen, IndianRupee, RussianRuble, SwissFranc, Bitcoin, TrendingDown,
  WalletCards, Calculator, BarChart3, Database, TrendingUp, MessageSquare,
  Brain, PenTool, FileText, Globe, Code, Activity, Shield, Search,
  CheckCircle, Users, Grid3X3, List, Filter, Info, Bot, Rocket, Wrench
];

const uniqueIconMap: { [key: string]: React.ElementType } = {};
let iconIndex = 0;

[...agentsData, ...masterAgentsData].forEach(agent => {
  if (!uniqueIconMap[agent.name]) {
    uniqueIconMap[agent.name] = bankIcons[iconIndex % bankIcons.length];
    iconIndex++;
  }
});

const getAgentIcon = (name: string) => {
  if (!uniqueIconMap[name]) {
    uniqueIconMap[name] = bankIcons[iconIndex % bankIcons.length];
    iconIndex++;
  }
  return uniqueIconMap[name];
};

const formatTokens = (tokens: number): string => {
  if (tokens === 0) return "0";
  if (tokens >= 1000) {
    return `${(tokens / 1000).toFixed(1)}k`;
  }
  return tokens.toString();
};

const getRankingBadge = (popularity: number): string => {
  const allAgents = [...agentsData].sort((a, b) => b.popularity - a.popularity);
  const rank = allAgents.findIndex(agent => agent.popularity === popularity) + 1;

  if (popularity === 0 || rank === 0) return "N/A";

  const suffix = rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th";
  return `${rank}${suffix}`;
};

const getRankingClass = (popularity: number): string => {
  const allAgents = [...agentsData].sort((a, b) => b.popularity - a.popularity);
  const rank = allAgents.findIndex(agent => agent.popularity === popularity) + 1;

  if (popularity === 0 || rank === 0) return "";

  if (rank === 1) return "rank-1st";
  if (rank === 2) return "rank-2nd";
  if (rank === 3) return "rank-3rd";
  return "";
};

const getMasterRankingBadge = (popularity: number): string => {
  const allAgents = [...masterAgentsData].sort((a, b) => b.popularity - a.popularity);
  const rank = allAgents.findIndex(agent => agent.popularity === popularity) + 1;

  if (popularity === 0 || rank === 0) return "N/A";

  const suffix = rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th";
  return `${rank}${suffix}`;
};

const getMasterRankingClass = (popularity: number): string => {
  const allAgents = [...masterAgentsData].sort((a, b) => b.popularity - a.popularity);
  const rank = allAgents.findIndex(agent => agent.popularity === popularity) + 1;

  if (popularity === 0 || rank === 0) return "";

  if (rank === 1) return "rank-1st";
  if (rank === 2) return "rank-2nd";
  if (rank === 3) return "rank-3rd";
  return "";
};

const MarketPlace: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"apps" | "skills">("apps");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Agents");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [tokenUsageFilter, setTokenUsageFilter] = useState("");
  const [numAppsFilter, setNumAppsFilter] = useState("");
  const [dynamicTokens, setDynamicTokens] = useState<{ [key: number]: number }>({});
  const [tokenKeys, setTokenKeys] = useState<{ [key: number]: number }>({});
  const [likedAgents, setLikedAgents] = useState<Set<number>>(new Set());
  const [savedAgents, setSavedAgents] = useState<Set<number>>(new Set());
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedMasterAgent, setSelectedMasterAgent] = useState<MasterAgent | null>(null);
  const [showAgentPopup, setShowAgentPopup] = useState(false);
  const [showMasterAgentPopup, setShowMasterAgentPopup] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    total: 0,
    live: 0,
    pilot: 0,
    tools: 0
  });
  const [statsAnimationComplete, setStatsAnimationComplete] = useState(false);
  const [activeStatFilter, setActiveStatFilter] = useState<string>("");
  const [sortBy, setSortBy] = useState("popularity");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const getAppsList = (appNames: string) => {
    if (!appNames || appNames === "N/A" || appNames === "None") return [];
    return appNames.split(',').map(app => app.trim()).filter(app => app.length > 0);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    const initialTokens: { [key: number]: number } = {};
    const initialKeys: { [key: number]: number } = {};
    agentsData.forEach(agent => {
      initialTokens[agent.id] = agent.tokens;
      initialKeys[agent.id] = 0;
    });
    setDynamicTokens(initialTokens);
    setTokenKeys(initialKeys);
  }, []);

  const getStatusCounts = () => {
    const data = activeTab === "apps" ? masterAgentsData : agentsData;
    const total = data.length;
    const live = data.filter(a => a.status === "Live" || a.status === "Beta Live" || a.status === "Beta LIve").length;
    const pilot = data.filter(a => a.status === "Pilot" || a.status === "POC" || a.status === "PoC").length;
    const tools = data.filter(a => a.status === "Tools" || a.status === "Development" || a.status === "SIT" || a.status === "UAT" || a.status === "Retired" || a.status === "Yet to start").length;

    return { total, live, pilot, tools };
  };

  useEffect(() => {
    setStatsAnimationComplete(false);
  }, [activeTab]);

  useEffect(() => {
    if (!statsAnimationComplete) {
      const targetStats = getStatusCounts();
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;

      const animateStats = () => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          total: Math.floor(targetStats.total * easeOutCubic),
          live: Math.floor(targetStats.live * easeOutCubic),
          pilot: Math.floor(targetStats.pilot * easeOutCubic),
          tools: Math.floor(targetStats.tools * easeOutCubic)
        });

        if (currentStep < steps) {
          setTimeout(animateStats, stepDuration);
        } else {
          setStatsAnimationComplete(true);
        }
      };

      setTimeout(animateStats, 300);
    }

    const interval = setInterval(() => {
      setDynamicTokens(prev => {
        const newTokens = { ...prev };
        agentsData.forEach(agent => {
          if (agent.numApps > 0) {
            const increase = Math.floor(Math.random() * 500) + 1000;
            newTokens[agent.id] = prev[agent.id] + increase;
          }
        });
        return newTokens;
      });

      setTokenKeys(prev => {
        const newKeys = { ...prev };
        Object.keys(prev).forEach(key => {
          newKeys[parseInt(key)] = prev[parseInt(key)] + 1;
        });
        return newKeys;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [statsAnimationComplete]);

  const filteredAgents = agentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.appNames.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesFilter = true;
    if (activeFilter !== "All Agents") {
      if (activeFilter === "Live") {
        matchesFilter = agent.status === "Live" || agent.status === "Beta Live" || agent.status === "Beta LIve";
      } else if (activeFilter === "Pilot") {
        matchesFilter = agent.status === "Pilot" || agent.status === "POC" || agent.status === "PoC";
      } else if (activeFilter === "Tools") {
        matchesFilter = agent.status === "Tools" || agent.status === "Development" || agent.status === "SIT" || agent.status === "UAT";
      }
    }

    const matchesCategory = !categoryFilter || agent.category === categoryFilter;

    const matchesTokenUsage = !tokenUsageFilter ||
      (tokenUsageFilter === "high" && (dynamicTokens[agent.id] || agent.tokens) >= 500000) ||
      (tokenUsageFilter === "medium" && (dynamicTokens[agent.id] || agent.tokens) >= 100000 && (dynamicTokens[agent.id] || agent.tokens) < 500000) ||
      (tokenUsageFilter === "low" && (dynamicTokens[agent.id] || agent.tokens) < 100000);

    const matchesNumApps = !numAppsFilter ||
      (numAppsFilter === "multiple" && agent.numApps >= 3) ||
      (numAppsFilter === "few" && agent.numApps >= 1 && agent.numApps <= 2) ||
      (numAppsFilter === "none" && agent.numApps === 0);

    return matchesSearch && matchesFilter && matchesCategory && matchesTokenUsage && matchesNumApps;
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "category":
        const categoryCompare = a.category.localeCompare(b.category);
        return categoryCompare !== 0 ? categoryCompare : a.name.localeCompare(b.name);
      case "recently_updated":
        return b.id - a.id;
      case "popularity":
      default:
        return b.popularity - a.popularity;
    }
  });

  const filteredMasterAgents = masterAgentsData.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.subAgents.some(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()));

    let matchesFilter = true;
    if (activeFilter !== "All Agents") {
      if (activeFilter === "Live") {
        matchesFilter = agent.status === "Live" || agent.status === "Beta Live" || agent.status === "Beta LIve";
      } else if (activeFilter === "Pilot") {
        matchesFilter = agent.status === "Pilot" || agent.status === "POC" || agent.status === "PoC";
      } else if (activeFilter === "Tools") {
        matchesFilter = agent.status === "Tools" || agent.status === "Development" || agent.status === "SIT" || agent.status === "UAT";
      }
    }

    const matchesNumApps = !numAppsFilter ||
      (numAppsFilter === "multiple" && agent.subAgents.length >= 3) ||
      (numAppsFilter === "few" && agent.subAgents.length >= 1 && agent.subAgents.length <= 2) ||
      (numAppsFilter === "none" && agent.subAgents.length === 0);

    return matchesSearch && matchesFilter && matchesNumApps;
  }).sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "recently_updated":
        return b.id - a.id;
      case "popularity":
      default:
        return b.popularity - a.popularity;
    }
  });

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Live":
      case "Beta Live":
      case "Beta LIve":
        return "status-live";
      case "Under Business Review":
      case "Development":
      case "SIT":
      case "UAT":
      case "Yet to start":
        return "status-under-review";
      case "Tools":
        return "status-tools";
      case "Pilot":
      case "POC":
      case "PoC":
        return "status-coming-soon";
      case "Retired":
        return "status-tools";
      default:
        return "status-under-review";
    }
  };

  const handleLike = (agentId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedAgents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(agentId)) {
        newSet.delete(agentId);
      } else {
        newSet.add(agentId);
      }
      return newSet;
    });
  };

  const handleSave = (agentId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedAgents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(agentId)) {
        newSet.delete(agentId);
      } else {
        newSet.add(agentId);
      }
      return newSet;
    });
  };

  const handleKnowMore = (agent: Agent, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedAgent(agent);
    setShowAgentPopup(true);
  };

  const handleMasterKnowMore = (agent: MasterAgent, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedMasterAgent(agent);
    setShowMasterAgentPopup(true);
  };

  const closeAgentPopup = () => {
    setShowAgentPopup(false);
    setSelectedAgent(null);
  };

  const closeMasterAgentPopup = () => {
    setShowMasterAgentPopup(false);
    setSelectedMasterAgent(null);
  };

  const clearAllFilters = () => {
    setCategoryFilter("");
    setTokenUsageFilter("");
    setNumAppsFilter("");
    setSearchQuery("");
    setActiveFilter("All Agents");
    setSortBy("popularity");
  };

  const applyFilters = () => {
    setShowFilters(false);
  };

  const uniqueCategories = Array.from(new Set(agentsData.map(agent => agent.category)));

  const handleStatClick = (filterType: string) => {
    if (activeStatFilter === filterType) {
      setActiveStatFilter("");
      setActiveFilter("All Agents");
    } else {
      setActiveStatFilter(filterType);
      switch (filterType) {
        case "total":
          setActiveFilter("All Agents");
          break;
        case "live":
          setActiveFilter("Live");
          break;
        case "pilot":
          setActiveFilter("Pilot");
          break;
        case "tools":
          setActiveFilter("Tools");
          break;
        default:
          setActiveFilter("All Agents");
          break;
      }
    }
  };

  return (
    <div className="marketplace-new-container">
      <div className="marketplace-header">
        <div className="header-content">
          <div className="header-icon">
            <Users size={32} />
          </div>
          <div className="header-text">
            <h1>Agent Marketplace</h1>
            <p>Discover and deploy specialized AI agents for your workflows</p>
          </div>
        </div>
        <div className="header-actions">
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'apps' ? 'active' : ''}`} 
              onClick={() => setActiveTab('apps')}
            >
              Apps (Master Agents)
            </button>
            <button 
              className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`} 
              onClick={() => setActiveTab('skills')}
            >
              Skills (Sub Agents)
            </button>
          </div>
          <button
            className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <Grid3X3 size={20} />
          </button>
          <button
            className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
          >
            <List size={20} />
          </button>
          <button
            className={`filter-btn ${showFilters ? 'active' : ''}`}
            onClick={toggleFilters}
          >
            <Filter size={20} />
          </button>
        </div>
      </div>

      <div className="stats-section">
        <div
          className={`stat-card ${activeStatFilter === 'total' ? 'active' : ''}`}
          onClick={() => handleStatClick('total')}
        >
          <div className="stat-icon-wrapper">
            <Bot size={24} />
          </div>
          <div className={`stat-number ${!statsAnimationComplete ? 'animating' : ''}`}>
            {animatedStats.total}
          </div>
          <div className="stat-label">TOTAL AGENTS</div>
        </div>
        <div
          className={`stat-card ${activeStatFilter === 'live' ? 'active' : ''}`}
          onClick={() => handleStatClick('live')}
        >
          <div className="stat-icon-wrapper">
            <Activity size={24} />
          </div>
          <div className={`stat-number ${!statsAnimationComplete ? 'animating' : ''}`}>
            {animatedStats.live}
          </div>
          <div className="stat-label">LIVE</div>
        </div>
        <div
          className={`stat-card ${activeStatFilter === 'pilot' ? 'active' : ''}`}
          onClick={() => handleStatClick('pilot')}
        >
          <div className="stat-icon-wrapper">
            <Rocket size={24} />
          </div>
          <div className={`stat-number ${!statsAnimationComplete ? 'animating' : ''}`}>
            {animatedStats.pilot}
          </div>
          <div className="stat-label">PILOT</div>
        </div>
        <div
          className={`stat-card ${activeStatFilter === 'tools' ? 'active' : ''}`}
          onClick={() => handleStatClick('tools')}
        >
          <div className="stat-icon-wrapper">
            <Wrench size={24} />
          </div>
          <div className={`stat-number ${!statsAnimationComplete ? 'animating' : ''}`}>
            {animatedStats.tools}
          </div>
          <div className="stat-label">TOOLS</div>
        </div>
      </div>

      <div className="search-section-new">
        <div className="search-container-new">
          <Search className="search-icon-new" size={20} />
          <input
            type="text"
            placeholder="Search agents by name, function, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input-new"
          />
          <button className="search-btn-new">Search</button>
        </div>
      </div>

      {showFilters && (
        <div className="advanced-filters-panel">
          <div className="filters-header">
            <h3>Advanced Filters</h3>
            <button className="close-filters" onClick={toggleFilters}>
              ×
            </button>
          </div>
          <div className="filters-content">
            <div className="filters-grid">
              {activeTab === 'skills' && (
                <div className="filter-group">
                  <label>Category</label>
                  <select
                    className="filter-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {uniqueCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              )}
              <div className="filter-group">
                <label>Sort By</label>
                <select
                  className="filter-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popularity">Popularity</option>
                  <option value="name">Name (A-Z)</option>
                  {activeTab === 'skills' && <option value="category">Category (A-Z)</option>}
                  <option value="recently_updated">Recently Updated</option>
                </select>
              </div>
              {activeTab === 'skills' && (
                <div className="filter-group">
                  <label>Token Usage</label>
                  <select
                    className="filter-select"
                    value={tokenUsageFilter}
                    onChange={(e) => setTokenUsageFilter(e.target.value)}
                  >
                    <option value="">Any Usage</option>
                    <option value="high">High Usage (500K+ tokens)</option>
                    <option value="medium">Medium Usage (100K-500K tokens)</option>
                    <option value="low">Low Usage (0-100K tokens)</option>
                  </select>
                </div>
              )}
              <div className="filter-group">
                <label>{activeTab === 'apps' ? 'Number of Sub Agents' : 'Number of Apps'}</label>
                <select
                  className="filter-select"
                  value={numAppsFilter}
                  onChange={(e) => setNumAppsFilter(e.target.value)}
                >
                  <option value="">Any Number</option>
                  <option value="multiple">Multiple (3+)</option>
                  <option value="few">Few (1-2)</option>
                  <option value="none">None (0)</option>
                </select>
              </div>
            </div>
            <div className="filter-actions">
              <button className="clear-filters-btn" onClick={clearAllFilters}>
                Clear All
              </button>
              <button className="apply-filters-btn" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="results-header">
        <p>
          {(categoryFilter || tokenUsageFilter || numAppsFilter || searchQuery) && (
            <span className="filter-indicator"> • Filters applied</span>
          )}
        </p>
      </div>

      <div className={`agents-grid-new ${viewMode}`}>
        {activeTab === 'skills' ? (
          filteredAgents.map((agent) => {
            const IconComponent = getAgentIcon(agent.name);
            const appsList = getAppsList(agent.appNames);

            return (
              <div key={agent.id} className="agent-card-new">
                <div className="card-header-new">
                  <IconComponent className="agent-icon-new" size={32} />
                  <div className="card-actions-new">
                    <Heart
                      className={`action-icon-new ${likedAgents.has(agent.id) ? 'liked' : ''}`}
                      size={16}
                      onClick={(e) => handleLike(agent.id, e)}
                    />
                    <Bookmark
                      className={`action-icon-new ${savedAgents.has(agent.id) ? 'saved' : ''}`}
                      size={16}
                      onClick={(e) => handleSave(agent.id, e)}
                    />
                  </div>
                </div>

                <div className="card-content-new">
                  <div className="badges-row">
                    <div className={`status-badge-new ${getStatusBadgeClass(agent.status)}`}>
                      <CheckCircle className="status-icon-new" size={14} />
                      {agent.status === "Tools" ? "TOOLS" :
                        agent.status === "Under Business Review" ? "UNDER BUSINESS REVIEW" :
                          agent.status.toUpperCase()}
                    </div>
                    <div className="category-badge-new">
                      <span className="category-tag-new">{agent.category}</span>
                    </div>
                  </div>

                  <h3 className="agent-title-new">{agent.name}</h3>
                  
                  <div className="description-container">
                    <p className={`agent-description-new ${expandedCards.has(agent.id) ? 'expanded' : ''}`}>
                      {agent.description}
                    </p>
                    {agent.description.length > 100 && (
                      <button className="read-more-btn" onClick={(e) => toggleExpand(agent.id, e)}>
                        {expandedCards.has(agent.id) ? 'Show less' : '... Read more'}
                      </button>
                    )}
                  </div>

                  {appsList.length > 0 && (
                    <div className="relations-container">
                      <div className="relations-title">Used In</div>
                      <div className="tags-row">
                        {appsList.slice(0, 3).map((app, i) => (
                          <span key={i} className="tag-pill" title={app}>{app}</span>
                        ))}
                        {appsList.length > 3 && (
                          <span className="tag-pill more">+{appsList.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="stats-grid-new">
                    <div className="stat-item-new">
                      <div className="stat-value-new">{agent.numApps}</div>
                      <div className="stat-label-ne">Apps</div>
                    </div>
                    <div className="stat-item-new">
                      <div className={`stat-value-new token-counter`} key={tokenKeys[agent.id]}>
                        {agent.tokens > 0 ? formatTokens(dynamicTokens[agent.id] || agent.tokens) : '0'}
                      </div>
                      <div className="stat-label-ne">Tokens</div>
                    </div>
                  </div>
                </div>

                <div className="card-footer-new">
                  <button
                    className="launch-btn-new"
                    onClick={(e) => handleKnowMore(agent, e)}
                  >
                    <Info size={16} />
                    Know More
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          filteredMasterAgents.map((agent) => {
            const IconComponent = getAgentIcon(agent.name);

            return (
              <div key={agent.id} className="agent-card-new">
                <div className="card-header-new">
                  <IconComponent className="agent-icon-new" size={32} />
                  <div className="card-actions-new">
                    <Heart
                      className={`action-icon-new ${likedAgents.has(agent.id) ? 'liked' : ''}`}
                      size={16}
                      onClick={(e) => handleLike(agent.id, e)}
                    />
                    <Bookmark
                      className={`action-icon-new ${savedAgents.has(agent.id) ? 'saved' : ''}`}
                      size={16}
                      onClick={(e) => handleSave(agent.id, e)}
                    />
                  </div>
                </div>

                <div className="card-content-new">
                  <div className="badges-row">
                    <div className={`status-badge-new ${getStatusBadgeClass(agent.status)}`}>
                      <CheckCircle className="status-icon-new" size={14} />
                      {agent.status.toUpperCase()}
                    </div>
                    <div className="category-badge-new">
                      <span className="category-tag-new">Master Agent</span>
                    </div>
                  </div>

                  <h3 className="agent-title-new">{agent.name}</h3>
                  
                  <div className="description-container">
                    <p className={`agent-description-new ${expandedCards.has(agent.id) ? 'expanded' : ''}`}>
                      {agent.description}
                    </p>
                    {agent.description.length > 100 && (
                      <button className="read-more-btn" onClick={(e) => toggleExpand(agent.id, e)}>
                        {expandedCards.has(agent.id) ? 'Show less' : '... Read more'}
                      </button>
                    )}
                  </div>

                  {agent.subAgents.length > 0 && (
                    <div className="relations-container">
                      <div className="relations-title">Sub Agents</div>
                      <div className="tags-row">
                        {agent.subAgents.slice(0, 3).map((sub, i) => (
                          <span key={i} className="tag-pill" title={sub}>{sub}</span>
                        ))}
                        {agent.subAgents.length > 3 && (
                          <span className="tag-pill more">+{agent.subAgents.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="stats-grid-new">
                    <div className="stat-item-new">
                      <div className="stat-value-new">{agent.subAgents.length}</div>
                      <div className="stat-label-ne">Sub Agents</div>
                    </div>
                  </div>
                </div>

                <div className="card-footer-new">
                  <button
                    className="launch-btn-new"
                    onClick={(e) => handleMasterKnowMore(agent, e)}
                  >
                    <Info size={16} />
                    Know More
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {showAgentPopup && selectedAgent &&
        ReactDOM.createPortal(
          <div className="popup-overlay" onClick={closeAgentPopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedAgent.name}</h2>
              <div className="details-content">
                <div className="details-section">
                  <h3>Description</h3>
                  <p>{selectedAgent.description}</p>
                </div>

                <div className="details-section">
                  <h3>Category</h3>
                  <p>{selectedAgent.category}</p>
                </div>

                <div className="details-section">
                  <h3>Statistics</h3>
                  <div className="details-stats">
                    <div className="stat-item">
                      <span className="stat-label">Applications Using:</span>
                      <span className="stat-value">{selectedAgent.numApps}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Tokens Processed:</span>
                      <span className="stat-value">
                        {selectedAgent.tokens > 0 ? formatTokens(dynamicTokens[selectedAgent.id] || selectedAgent.tokens) : '0'}
                      </span>
                    </div>
                  </div>
                </div>

                {getAppsList(selectedAgent.appNames).length > 0 && (
                  <div className="details-section">
                    <h3>Used In Applications</h3>
                    <ul>
                      {getAppsList(selectedAgent.appNames).map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="popup-footer">
                <button onClick={closeAgentPopup}>Close</button>
              </div>
            </div>
          </div>,
          document.body
        )}
      {showMasterAgentPopup && selectedMasterAgent &&
        ReactDOM.createPortal(
          <div className="popup-overlay" onClick={closeMasterAgentPopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedMasterAgent.name}</h2>
              <div className="details-content">
                <div className="details-section">
                  <h3>Description</h3>
                  <p>{selectedMasterAgent.description}</p>
                </div>

                <div className="details-section">
                  <h3>Status</h3>
                  <p>{selectedMasterAgent.status}</p>
                </div>

                <div className="details-section">
                  <h3>Statistics</h3>
                  <div className="details-stats">
                    <div className="stat-item">
                      <span className="stat-label">Sub Agents Count:</span>
                      <span className="stat-value">{selectedMasterAgent.subAgents.length}</span>
                    </div>
                  </div>
                </div>

                {selectedMasterAgent.subAgents.length > 0 && (
                  <div className="details-section">
                    <h3>Sub Agents</h3>
                    <ul>
                      {selectedMasterAgent.subAgents.map((sub, index) => (
                        <li key={index}>{sub}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="popup-footer">
                <button onClick={closeMasterAgentPopup}>Close</button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default MarketPlace;
